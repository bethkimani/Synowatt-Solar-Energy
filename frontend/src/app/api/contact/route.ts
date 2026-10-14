import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { company } from '@/data/company';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, property, service, solution, energy, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Please provide both your name and phone number.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // If Resend API key is not configured, log clear guidance for administrator
    if (!apiKey) {
      console.warn(
        '[Synowatt Contact Form] RESEND_API_KEY is not defined. Email could not be sent automatically. Lead details:',
        { name, phone, email, property, service, solution }
      );
      return NextResponse.json(
        {
          error:
            'Email delivery is currently unconfigured. Please add RESEND_API_KEY to your environment variables.',
          unconfigured: true,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || company.email;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Synowatt Solar Leads <onboarding@resend.dev>';

    // Build responsive, styled HTML notification email
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Solar Quote Request</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #222222;">
          <div style="max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e5e7eb;">
            <!-- Header Banner -->
            <div style="background-color: #00782A; padding: 28px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                ☀️ New Solar Quote Request
              </h1>
              <p style="color: #FFB000; margin: 8px 0 0 0; font-size: 14px; font-weight: 600;">
                Synowatt Power & Solar Ltd Website
              </p>
            </div>

            <!-- Content Area -->
            <div style="padding: 28px 24px;">
              <p style="font-size: 15px; line-height: 1.6; color: #4b5563; margin-top: 0;">
                You received a new solar inquiry from the Synowatt website contact quote form. Here are the customer's details:
              </p>

              <!-- Customer Details Table -->
              <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
                <tbody>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151; width: 38%;">Client Name:</td>
                    <td style="padding: 12px 8px; font-weight: 600; color: #111827;">${name}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151;">Phone Number:</td>
                    <td style="padding: 12px 8px;">
                      <a href="tel:${phone}" style="color: #00782A; text-decoration: none; font-weight: 700;">${phone}</a>
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151;">Email Address:</td>
                    <td style="padding: 12px 8px;">
                      ${
                        email
                          ? `<a href="mailto:${email}" style="color: #00782A; text-decoration: none;">${email}</a>`
                          : '<span style="color: #9ca3af; font-style: italic;">Not provided</span>'
                      }
                    </td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151;">Property Type:</td>
                    <td style="padding: 12px 8px; color: #111827;">${property || 'Not specified'}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151;">Requested Service:</td>
                    <td style="padding: 12px 8px; font-weight: 700; color: #00782A;">${service || 'General Solar Inquiry'}</td>
                  </tr>
                  ${
                    solution
                      ? `
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151;">Preferred System / Capacity:</td>
                    <td style="padding: 12px 8px; font-weight: 600; color: #111827;">${solution}</td>
                  </tr>`
                      : ''
                  }
                  ${
                    energy
                      ? `
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 12px 8px; font-weight: 700; color: #374151;">Energy Requirements:</td>
                    <td style="padding: 12px 8px; color: #4b5563;">${energy}</td>
                  </tr>`
                      : ''
                  }
                </tbody>
              </table>

              ${
                message
                  ? `
              <!-- Client Message Box -->
              <div style="margin-top: 24px; padding: 16px; background-color: #f9fafb; border-radius: 12px; border-left: 4px solid #00782A;">
                <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #6b7280; letter-spacing: 0.5px;">
                  Client Message / Site Details:
                </p>
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${message}</p>
              </div>`
                  : ''
              }

              <!-- Direct Action Buttons -->
              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <a
                  href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                    name
                  )}%2C%20thank%20you%20for%20contacting%20Synowatt%20Power%20%26%20Solar.%20We%20received%20your%20request%20for%20${encodeURIComponent(
                    service || 'solar power'
                  )}."
                  style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 9999px; font-weight: 700; font-size: 14px; margin: 4px;"
                >
                  Reply via WhatsApp
                </a>
                <a
                  href="tel:${phone}"
                  style="display: inline-block; background-color: #00782A; color: #ffffff; text-decoration: none; padding: 12px 22px; border-radius: 9999px; font-weight: 700; font-size: 14px; margin: 4px;"
                >
                  Call Client (${phone})
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
              Received via Synowatt Power &amp; Solar Ltd Website • Mountain Mall, Thika Road, Nairobi
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email ? `${name} <${email}>` : undefined,
      subject: `☀️ New Solar Inquiry from ${name} (${service || 'Quote Request'})`,
      html: htmlEmail,
    });

    if (error) {
      console.error('[Synowatt Contact Form] Resend API error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('[Synowatt Contact Form] Unexpected error in /api/contact:', err);
    return NextResponse.json(
      { error: `An error occurred: ${errorMessage}` },
      { status: 500 }
    );
  }
}
