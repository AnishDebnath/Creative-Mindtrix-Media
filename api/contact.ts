import type { IncomingMessage, ServerResponse } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

// Helper to get environment variable with priority to .env file and safe fallbacks
function getEnvVar(key: string, defaultValue = ''): string {
  // 1. Try reading directly from .env file first (for live local development)
  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split(/\r?\n/);
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const k = trimmed.slice(0, eqIdx).trim();
            if (k === key) {
              let v = trimmed.slice(eqIdx + 1).trim();
              if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
                v = v.slice(1, -1);
              }
              if (v && !v.startsWith('re_your_') && !v.includes('your-email@example.com')) {
                return v;
              }
            }
          }
        }
      }
    }
  } catch {
    // Ignore error
  }

  // 2. Fallback to process.env (for Vercel production deployment)
  const envVal = process.env[key];
  if (envVal && !envVal.startsWith('re_your_') && !envVal.includes('your-email@example.com')) {
    return envVal;
  }

  return defaultValue;
}

interface ContactRequestBody {
  name?: string;
  phone?: string;
  email?: string;
  projectModel?: string;
  selectedServices?: string[];
  requirements?: string;
}

async function parseBody(req: any): Promise<ContactRequestBody> {
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

function generateOwnerEmailHtml(data: {
  name: string;
  phone: string;
  email?: string;
  projectModel: string;
  services: string[];
  requirements?: string;
  submittedAt: string;
}) {
  const cleanPhone = data.phone.replace(/[^0-9+]/g, '');
  const waPhone = cleanPhone.replace(/^\+/, '');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Inquiry - Mindtrix Media</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf6f8; margin: 0; padding: 24px; color: #1f1f1f;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #ebdce7; box-shadow: 0 4px 20px rgba(61, 32, 53, 0.08);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2f182a 0%, #3d2035 50%, #542947 100%); padding: 28px 24px; color: #ffffff;">
      <h1 style="margin: 0 0 6px 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">MINDTRIX MEDIA</h1>
      <p style="margin: 0; font-size: 14px; color: #eda970; font-weight: 600;">⚡ New Client Project Inquiry</p>
    </div>

    <!-- Body -->
    <div style="padding: 24px;">
      <div style="margin-bottom: 20px; padding: 14px 18px; background: #faf6f8; border-radius: 12px; border: 1px solid #ebdce7;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a7182; font-weight: bold; display: block; margin-bottom: 4px;">Selected Plan</span>
        <span style="font-size: 16px; font-weight: 800; color: #3d2035;">${data.projectModel}</span>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #6b5a66; font-size: 13px; font-weight: 600; width: 140px;">Client / Brand:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #171717; font-size: 14px; font-weight: 700;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #6b5a66; font-size: 13px; font-weight: 600;">Phone / WhatsApp:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #171717; font-size: 14px; font-weight: 600;">
            <a href="tel:${cleanPhone}" style="color: #3d2035; text-decoration: none; font-weight: 700;">${data.phone}</a>
            <span style="color: #cbd5e1; margin: 0 6px;">|</span>
            <a href="https://wa.me/${waPhone}" style="color: #16a34a; text-decoration: none; font-weight: 700;">Open WhatsApp</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #6b5a66; font-size: 13px; font-weight: 600;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #171717; font-size: 14px;">
            ${data.email ? `<a href="mailto:${data.email}" style="color: #3d2035; text-decoration: underline;">${data.email}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #6b5a66; font-size: 13px; font-weight: 600; vertical-align: top;">Services Needed:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #171717; font-size: 13px; line-height: 1.5;">
            ${data.services.map((s) => `<span style="display: inline-block; background: #faf6f8; border: 1px solid #ebdce7; color: #3d2035; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; margin: 2px 4px 2px 0;">${s}</span>`).join('')}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #6b5a66; font-size: 13px; font-weight: 600; vertical-align: top;">Requirements:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f2e7ef; color: #171717; font-size: 13px; line-height: 1.5; white-space: pre-wrap;">${data.requirements || '<span style="color: #94a3b8; font-style: italic;">None specified</span>'}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #6b5a66; font-size: 12px;">Submitted At:</td>
          <td style="padding: 10px 0; color: #6b5a66; font-size: 12px;">${data.submittedAt}</td>
        </tr>
      </table>

      <div style="padding-top: 10px;">
        <a href="https://wa.me/${waPhone}" style="display: inline-block; background: #25d366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 20px; font-size: 13px; font-weight: 700;">
          Reply on WhatsApp
        </a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

function generateClientEmailHtml(data: {
  name: string;
  projectModel: string;
  services: string[];
  phone: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>We've received your inquiry - Mindtrix Media</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf6f8; margin: 0; padding: 24px; color: #1f1f1f;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #ebdce7; box-shadow: 0 4px 20px rgba(61, 32, 53, 0.08);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2f182a 0%, #3d2035 50%, #542947 100%); padding: 32px 24px; color: #ffffff; text-align: center;">
      <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">MINDTRIX MEDIA</h1>
      <p style="margin: 0; font-size: 14px; color: #eda970; font-weight: 600;">Creative AI Ads & High-Impact Reels</p>
    </div>

    <!-- Body -->
    <div style="padding: 28px 24px;">
      <h2 style="font-size: 18px; font-weight: 800; color: #171717; margin: 0 0 12px 0;">
        Hi ${data.name}, thank you for reaching out!
      </h2>
      <p style="font-size: 14px; line-height: 1.6; color: #525252; margin: 0 0 20px 0;">
        We have received your project inquiry. Our creative production lead will review your requirements and connect with you directly via WhatsApp / phone (<strong style="color: #171717;">${data.phone}</strong>) within 24 hours.
      </p>

      <div style="background: #faf6f8; border-radius: 12px; border: 1px solid #ebdce7; padding: 18px; margin-bottom: 22px;">
        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a7182; font-weight: bold; margin-bottom: 4px;">Inquiry Summary</div>
        <p style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #3d2035;">Plan: ${data.projectModel}</p>
        <div style="font-size: 13px; color: #525252;">
          <strong>Services Selected:</strong>
          <div style="margin-top: 6px;">
            ${data.services.map((s) => `<span style="display: inline-block; background: #ffffff; border: 1px solid #ebdce7; color: #3d2035; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; margin: 2px 4px 2px 0;">${s}</span>`).join('')}
          </div>
        </div>
      </div>

      <p style="font-size: 13px; line-height: 1.5; color: #737373; margin: 0 0 20px 0;">
        Need immediate assistance? Feel free to reach out to us directly:
      </p>

      <div style="display: flex; gap: 12px;">
        <a href="https://wa.me/919073604457" style="display: inline-block; background: #25d366; color: #ffffff; text-decoration: none; padding: 10px 18px; border-radius: 20px; font-size: 13px; font-weight: 700;">
          Chat on WhatsApp
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #faf6f8; padding: 16px 24px; text-align: center; border-top: 1px solid #ebdce7;">
      <p style="margin: 0; font-size: 11px; color: #8a7182;">
        Mindtrix Media &copy; ${new Date().getFullYear()} &middot; Kolkata, India &middot; +91 90736 04457
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

export default async function handler(req: any, res: any) {
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

    // 2. If client provided an email address (and not a placeholder like example.com), send confirmation auto-responder
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
        // Note: we don't throw here so the user's inquiry is still treated as successfully received
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
