import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Joi from 'joi';

const emailStyles = {
  container:
    "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fafafa;",
  header:
    'background: linear-gradient(135deg, #171717 0%, #262626 100%); color: #f5f5f5; padding: 30px; border-radius: 12px 12px 0 0;',
  headerTitle: 'margin: 0; font-size: 24px; font-weight: 600;',
  headerSubtitle: 'margin: 10px 0 0 0; opacity: 0.8; color: #d4d4d8;',
  body: 'background: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;',
  sectionTitle: 'color: #171717; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;',
  messageBox:
    'background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #525252;',
  messageText: 'margin: 0; color: #171717; line-height: 1.6;',
  footer: 'margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;',
  footerText: 'margin: 0; color: #737373; font-size: 14px;',
  greeting: 'color: #171717; line-height: 1.6; margin: 0 0 20px 0; font-weight: 500;',
  paragraph: 'color: #525252; line-height: 1.6; margin: 0 0 20px 0;',
  signature: 'color: #171717; line-height: 1.6; margin: 20px 0 0 0;',
  signatureTitle: 'color: #737373; font-size: 14px;',
};

const requestSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().trim(),
  contact: Joi.string().min(3).max(200).required().trim(),
  reason: Joi.string().min(5).max(500).required().trim(),
});

const isEmail = (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT == 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    tls: { rejectUnauthorized: false },
    pool: true,
    maxConnections: 3,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

export async function POST(request) {
  try {
    const body = await request.json();
    const { error, value } = requestSchema.validate(body);

    if (error) {
      return NextResponse.json(
        { success: false, message: error.details[0].message },
        { status: 400 }
      );
    }

    const { name, contact, reason } = value;

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
      return NextResponse.json(
        { success: false, message: 'Email service not configured.' },
        { status: 500 }
      );
    }

    const transporter = createTransporter();
    const timestamp = new Date().toLocaleString();

    // Notification email to Suhail
    const notificationMail = {
      from: `"Mohd Suhail Portfolio" <${SMTP_FROM}>`,
      replyTo: isEmail(contact) ? contact : SMTP_FROM,
      to: 'sirsuhail01@gmail.com',
      subject: `Case Study Access Request — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
          <div style="${emailStyles.container}">
            <div style="${emailStyles.header}">
              <h1 style="${emailStyles.headerTitle}">New Case Study Access Request</h1>
              <p style="${emailStyles.headerSubtitle}">Someone wants to view your locked case study</p>
            </div>
            <div style="${emailStyles.body}">
              <h3 style="${emailStyles.sectionTitle}">Requester Details:</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5; width: 120px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;"><strong>Contact:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${
                    isEmail(contact)
                      ? `<a href="mailto:${contact}">${contact}</a>`
                      : contact
                  }</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Requested at:</strong></td>
                  <td style="padding: 8px 0;">${timestamp}</td>
                </tr>
              </table>

              <div style="margin-top: 24px;">
                <h3 style="${emailStyles.sectionTitle}">Reason:</h3>
                <div style="${emailStyles.messageBox}">
                  <p style="${emailStyles.messageText}">${reason.replace(/\n/g, '<br>')}</p>
                </div>
              </div>

              <div style="${emailStyles.footer}">
                <p style="${emailStyles.footerText}">
                  ${isEmail(contact) ? `Reply directly to this email to respond to ${name}.` : `Contact ${name} at: ${contact}`}
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const mailsToSend = [transporter.sendMail(notificationMail)];

    // Auto-reply only if contact is an email address
    if (isEmail(contact)) {
      const autoReplyMail = {
        from: `"Mohd Suhail" <${SMTP_FROM}>`,
        replyTo: `"Mohd Suhail" <${SMTP_FROM}>`,
        to: contact,
        subject: `Got your request, ${name}! I'll be in touch.`,
        html: `
          <!DOCTYPE html>
          <html>
          <head><meta charset="utf-8"></head>
          <body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
            <div style="${emailStyles.container}">
              <div style="${emailStyles.header}">
                <h1 style="${emailStyles.headerTitle}">Request Received!</h1>
                <p style="${emailStyles.headerSubtitle}">I'll review your access request shortly</p>
              </div>
              <div style="${emailStyles.body}">
                <p style="${emailStyles.greeting}">Hi ${name},</p>
                <p style="${emailStyles.paragraph}">
                  Thanks for your interest in my case study! I've received your request and will review it soon.
                  If everything checks out, I'll send you the password directly.
                </p>
                <div style="${emailStyles.messageBox}; margin: 20px 0;">
                  <h3 style="${emailStyles.sectionTitle}">Your reason:</h3>
                  <p style="margin: 0; color: #525252; font-style: italic;">"${reason.substring(0, 300)}${reason.length > 300 ? '...' : ''}"</p>
                </div>
                <p style="${emailStyles.paragraph}">
                  In the meantime, feel free to explore the rest of my portfolio.
                </p>
                <p style="${emailStyles.signature}">
                  Best,<br>
                  <strong style="font-weight: 600;">Mohd Suhail</strong><br>
                  <span style="${emailStyles.signatureTitle}">UI UX Designer</span>
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
      };
      mailsToSend.push(transporter.sendMail(autoReplyMail));
    }

    console.log('📧 Sending access request emails...');
    await Promise.all(mailsToSend);
    console.log('✅ Access request emails sent.');
    transporter.close();

    return NextResponse.json({ success: true, message: 'Request sent!' });
  } catch (err) {
    console.error('Access request error:', err);

    let message = 'Failed to send request. Please try again.';
    if (err.code === 'EAUTH') message = 'SMTP authentication failed.';
    else if (err.code === 'ESOCKET' || err.code === 'ECONNECTION') message = 'Could not connect to email server.';
    else if (err.code === 'ETIMEDOUT') message = 'Email server timed out.';

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
