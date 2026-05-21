import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Joi from 'joi';

// Email styling (inline styles required for email clients)
const emailStyles = {
  container:
    "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fafafa;",
  header:
    'background: linear-gradient(135deg, #171717 0%, #262626 100%); color: #f5f5f5; padding: 30px; border-radius: 12px 12px 0 0;',
  headerTitle: 'margin: 0; font-size: 24px; font-weight: 600;',
  headerSubtitle: 'margin: 10px 0 0 0; opacity: 0.8; color: #d4d4d8;',
  body: 'background: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e5e5e5;',
  sectionTitle: 'color: #171717; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;',
  contactDetail: 'margin: 6px 0; color: #525252;',
  contactLabel: 'color: #171717;',
  messageBox:
    'background: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #525252;',
  messageText: 'margin: 0; color: #171717; line-height: 1.6;',
  footer: 'margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e5e5;',
  footerText: 'margin: 0; color: #737373; font-size: 14px;',
  greeting: 'color: #171717; line-height: 1.6; margin: 0 0 20px 0; font-weight: 500;',
  paragraph: 'color: #525252; line-height: 1.6; margin: 0 0 20px 0;',
  link: 'color: #171717; text-decoration: underline; text-decoration-color: #a3a3a3;',
  signature: 'color: #171717; line-height: 1.6; margin: 20px 0 0 0;',
  signatureTitle: 'color: #737373; font-size: 14px;',
  centerText: 'text-align: center; margin-top: 20px;',
  smallText: 'color: #737373; font-size: 12px; margin: 0;',
};

// Validation schema for contact form
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().trim(),
  email: Joi.string().email().required().trim(),
  subject: Joi.string().max(200).optional().trim(),
  message: Joi.string().min(10).max(1000).required().trim(),
});

// Create SMTP transporter with optimized settings
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    // Connection optimization
    pool: true,
    maxConnections: 3,
    maxMessages: 100,
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
};

export async function POST(request) {
  const requestStart = Date.now();

  try {
    const body = await request.json();
    
    // Validate request body
    const { error, value } = contactSchema.validate(body);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          details: error.details[0].message,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = value;

    // Read SMTP config from environment variables
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;

    if (!host || !port || !user || !pass || !smtpFrom) {
      const missing = [];
      if (!host) missing.push('SMTP_HOST');
      if (!port) missing.push('SMTP_PORT');
      if (!user) missing.push('SMTP_USER');
      if (!pass) missing.push('SMTP_PASS');
      if (!smtpFrom) missing.push('SMTP_FROM');

      console.error('❌ Missing SMTP env vars:', missing.join(', '));
      return NextResponse.json(
        {
          success: false,
          message: `SMTP not configured. Missing: ${missing.join(', ')}`,
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Get client IP address
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIP = forwardedFor || realIp || 'Unknown';

    // Email template for notification
    const notificationMailOptions = {
      from: `"Mohd Suhail Portfolio" <${smtpFrom}>`,
      replyTo: email,
      to: 'sirsuhail01@gmail.com',
      subject: subject ? `New Contact: ${subject} - ${name}` : `New Message via Your Portfolio Contact Form - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
          <div style="${emailStyles.container}">
            <div style="${emailStyles.header}">
              <h1 style="${emailStyles.headerTitle}">New Contact Form Submission</h1>
              <p style="${emailStyles.headerSubtitle}">From your portfolio website</p>
            </div>
            
            <div style="${emailStyles.body}">
              <div style="margin-bottom: 24px;">
                <h3 style="${emailStyles.sectionTitle}">Contact Details:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${email}">${email}</a></td>
                  </tr>
                  ${
                    subject
                      ? `<tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;"><strong>Subject:</strong></td>
                          <td style="padding: 8px 0; border-bottom: 1px solid #e5e5e5;">${subject}</td>
                        </tr>`
                      : ''
                  }
                  <tr>
                    <td style="padding: 8px 0;"><strong>Timestamp:</strong></td>
                    <td style="padding: 8px 0;">${new Date().toLocaleString()}</td>
                  </tr>
                </table>
              </div>
              
              <div style="margin-bottom: 24px;">
                <h3 style="${emailStyles.sectionTitle}">Message:</h3>
                <div style="${emailStyles.messageBox}">
                  <p style="${emailStyles.messageText}">${message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              
              <div style="${emailStyles.footer}">
                <p style="${emailStyles.footerText}">
                  <strong>IP Address:</strong> ${clientIP}
                </p>
                <p style="${emailStyles.footerText}">
                  <strong>Reply directly to this email to respond to ${name}</strong>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply email template
    const autoReplyMailOptions = {
      from: `"Mohd Suhail" <${smtpFrom}>`,
      replyTo: `"Mohd Suhail" <${smtpFrom}>`,
      to: email,
      subject: `Thank you for contacting me, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting me!</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
          <div style="${emailStyles.container}">
            <div style="${emailStyles.header}">
              <h1 style="${emailStyles.headerTitle}">Thank You for Reaching Out!</h1>
              <p style="${emailStyles.headerSubtitle}">I've received your message</p>
            </div>
            
            <div style="${emailStyles.body}">
              <p style="${emailStyles.greeting}">
                Hi ${name},
              </p>
              
              <p style="${emailStyles.paragraph}">
                Thank you for getting in touch! I've received your message and will get back to you as soon as possible, 
                usually within 24-48 hours.
              </p>
              
              <div style="${emailStyles.messageBox}; margin: 20px 0;">
                <h3 style="${emailStyles.sectionTitle}">Your Message:</h3>
                <p style="margin: 0; color: #525252; font-style: italic;">"${message.substring(
                  0,
                  200
                )}${message.length > 200 ? '...' : ''}"</p>
              </div>
              
              <p style="${emailStyles.paragraph}">
                In the meantime, feel free to check out my latest projects on my portfolio.
              </p>
              
              <p style="${emailStyles.signature}">
                Best regards,<br>
                <strong style="font-weight: 600;">Mohd Suhail</strong><br>
                <span style="${emailStyles.signatureTitle}">UI UX Designer</span>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails in parallel for faster response
    console.log('📧 Sending emails...');
    const startTime = Date.now();

    await Promise.all([
      transporter.sendMail(notificationMailOptions),
      transporter.sendMail(autoReplyMailOptions)
    ]);

    const emailDuration = Date.now() - startTime;
    const totalDuration = Date.now() - requestStart;
    console.log(`✅ Emails sent in ${emailDuration}ms (total: ${totalDuration}ms)`);

    // Close the connection pool
    transporter.close();

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Thank you for contacting me.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    // Provide more specific error messages based on the error type
    let errorMessage = 'Failed to send message. Please try again later.';

    if (error.code === 'EAUTH') {
      errorMessage = 'SMTP authentication failed. Please check your email credentials.';
      console.error('SMTP Auth Error: Invalid username or password. Make sure you are using an App Password for Gmail.');
    } else if (error.code === 'ESOCKET' || error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please check your network connection.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection to email server timed out.';
    } else if (error.responseCode === 535) {
      errorMessage = 'SMTP authentication failed. Please verify your App Password is correct.';
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        ...(process.env.NODE_ENV === 'development' && {
          error: error.message,
          code: error.code,
          responseCode: error.responseCode
        }),
      },
      { status: 500 }
    );
  }
}
