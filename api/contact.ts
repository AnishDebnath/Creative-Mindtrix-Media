import type { IncomingMessage, ServerResponse } from 'node:http';
import {
  generateOwnerEmailHtml,
  generateClientEmailHtml,
  getEnvVar,
  type ContactRequestBody,
} from '../src/email/index.ts';

async function parseBody(req: IncomingMessage | any): Promise<ContactRequestBody> {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (chunk: any) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(data));
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(req: IncomingMessage | any, res: ServerResponse | any) {
  // Set CORS headers for API calls
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const body = await parseBody(req);
    const { name, phone, email, projectModel, selectedServices, requirements } = body;

    // Validate compulsory fields
    if (!name || !phone || !email) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Name, Phone, and Email are required.' }));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Please provide a valid email address.' }));
      return;
    }

    if (phone.replace(/[^0-9]/g, '').length < 10) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Please provide a valid 10-digit phone number.' }));
      return;
    }

    if (!selectedServices || selectedServices.length === 0) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Please select at least one service.' }));
      return;
    }

    const resendApiKey = getEnvVar('RESEND_API_KEY');
    let fromEmail = getEnvVar('RESEND_FROM_EMAIL', 'Mindtrix Media <hello@mindtrixmedia.com>');
    if (!fromEmail || fromEmail.includes('example.com')) {
      fromEmail = 'Mindtrix Media <hello@mindtrixmedia.com>';
    }

    let receiverEmail = getEnvVar('CONTACT_RECEIVER_EMAIL', 'mindtrixmediaindia@gmail.com');
    if (!receiverEmail || receiverEmail.includes('example.com')) {
      receiverEmail = 'mindtrixmediaindia@gmail.com';
    }

    const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // If Resend API key is not yet configured, gracefully log and return success
    if (!resendApiKey || resendApiKey.trim() === '' || resendApiKey.startsWith('re_your_')) {
      console.warn(
        '[Resend] RESEND_API_KEY is not configured yet. Inquiry received in development mode:',
        { name, phone, email, projectModel, selectedServices, requirements }
      );

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          success: true,
          mock: true,
          message: 'Inquiry received in dev mode (Configure RESEND_API_KEY in .env to send real emails).',
        })
      );
      return;
    }

    const isMockEmail = email ? email.toLowerCase().includes('example.com') : false;

    // 1. Send notification email to owner
    const ownerHtml = generateOwnerEmailHtml({
      name,
      phone,
      email,
      projectModel: projectModel || 'Per Project',
      services: selectedServices,
      requirements,
      submittedAt,
    });

    const ownerEmailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: !isMockEmail ? email : undefined,
        subject: `⚡ New Lead: ${name} (${projectModel || 'Per Project'})`,
        html: ownerHtml,
      }),
    });

    if (!ownerEmailRes.ok) {
      const errData = (await ownerEmailRes.json().catch(() => ({}))) as Record<string, any>;
      console.error('[Resend] Failed to send owner email:', errData);
      throw new Error(errData.message || 'Failed to dispatch notification email via Resend.');
    }

    // 2. If client provided an email address, send confirmation auto-responder
    if (email && email.includes('@') && !isMockEmail) {
      const clientHtml = generateClientEmailHtml({
        name,
        projectModel: projectModel || 'Per Project',
        services: selectedServices,
        phone,
      });

      const clientEmailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          reply_to: 'hello@mindtrixmedia.com',
          subject: "We've received your project inquiry - Mindtrix Media",
          html: clientHtml,
        }),
      });

      if (!clientEmailRes.ok) {
        const clientErr = (await clientEmailRes.json().catch(() => ({}))) as Record<string, any>;
        console.warn('[Resend] Could not send confirmation to client email:', clientErr);
      }
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true }));
  } catch (err: any) {
    console.error('[Resend Error]:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: err.message || 'Server error while sending email.' }));
  }
}
