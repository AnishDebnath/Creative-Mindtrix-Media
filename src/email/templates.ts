import type { OwnerEmailData, ClientEmailData } from './types.ts';

/**
 * Generates the HTML email notification dispatched to the studio owner
 */
export function generateOwnerEmailHtml(data: OwnerEmailData): string {
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

/**
 * Generates the automated confirmation email dispatched to the client
 */
export function generateClientEmailHtml(data: ClientEmailData): string {
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
