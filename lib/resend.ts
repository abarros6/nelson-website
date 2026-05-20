import { Resend } from 'resend';
import type { GalleryPhoto } from './gallery-data';

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY environment variable is not set.');
  return new Resend(key);
}

export interface QuoteEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  selectedPhotos: GalleryPhoto[];
}

function buildEmailHtml(data: QuoteEmailData): string {
  const photoRows =
    data.selectedPhotos.length > 0
      ? `
    <h2 style="font-family: Georgia, serif; color: #1a1a1a; font-size: 18px; margin: 32px 0 12px;">Reference Photos</h2>
    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
      <tr>
        ${data.selectedPhotos
          .map(
            (p) => `
          <td style="padding: 4px 8px 4px 0; vertical-align: top;">
            <div style="background-color: ${p.color}; width: 100px; height: 75px; border-radius: 4px; margin-bottom: 4px;"></div>
            <p style="font-size: 11px; color: #555; margin: 0; width: 100px;">${p.label}</p>
            <p style="font-size: 10px; color: #888; margin: 2px 0 0; width: 100px;">${p.category}</p>
          </td>
        `
          )
          .join('')}
      </tr>
    </table>
  `
      : '';

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 24px;">

  <div style="border-left: 4px solid #C8373A; padding-left: 16px; margin-bottom: 32px;">
    <h1 style="font-family: Georgia, serif; font-size: 24px; margin: 0 0 4px; color: #1a1a1a;">New Quote Request</h1>
    <p style="margin: 0; color: #6b6b6b; font-size: 14px;">Costa Railings LTD Website</p>
  </div>

  <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-bottom: 24px;">
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e4de; width: 120px;">
        <strong style="color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Name</strong>
      </td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e4de;">
        ${data.name}
      </td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e4de;">
        <strong style="color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</strong>
      </td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e4de;">
        <a href="mailto:${data.email}" style="color: #C8373A;">${data.email}</a>
      </td>
    </tr>
    ${
      data.phone
        ? `
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e4de;">
        <strong style="color: #6b6b6b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</strong>
      </td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e4de;">${data.phone}</td>
    </tr>`
        : ''
    }
  </table>

  <h2 style="font-family: Georgia, serif; color: #1a1a1a; font-size: 18px; margin: 24px 0 12px;">Message</h2>
  <div style="background: #f7f6f3; border-radius: 4px; padding: 16px; margin-bottom: 24px;">
    <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
  </div>

  ${photoRows}

  <hr style="border: none; border-top: 1px solid #e5e4de; margin: 32px 0 16px;"/>
  <p style="color: #999; font-size: 12px; margin: 0;">Sent via the Costa Railings LTD website quote form.</p>

</body>
</html>
  `.trim();
}

export async function sendQuoteEmail(data: QuoteEmailData): Promise<{ success: boolean; error?: string }> {
  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: 'Costa Railings Website <noreply@costarailings.com>',
      to: 'quotes@costarailings.com',
      replyTo: data.email,
      subject: `Quote Request from ${data.name}`,
      html: buildEmailHtml(data),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: message };
  }
}
