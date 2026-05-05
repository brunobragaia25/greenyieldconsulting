import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "GreenYield Contact <onboarding@resend.dev>",
    to: ["bragaiasouza@gmail.com"],
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f6f8; padding: 40px 20px; min-height: 100vh;">
        <div style="max-width: 560px; margin: 0 auto;">

          <!-- Header -->
          <div style="background: #22595d; border-radius: 16px 16px 0 0; padding: 32px; text-align: center;">
            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.6);">GreenYield Consulting</p>
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff;">New Contact Form Submission</h1>
          </div>

          <!-- Body -->
          <div style="background: #ffffff; border-radius: 0 0 16px 16px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">

            <!-- Field -->
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #26a9b3;">Name</p>
              <p style="margin: 0; font-size: 15px; color: #343b44; font-weight: 500;">${name}</p>
            </div>

            <div style="height: 1px; background: #f0f0f0; margin-bottom: 20px;"></div>

            <!-- Field -->
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #26a9b3;">Email</p>
              <a href="mailto:${email}" style="margin: 0; font-size: 15px; color: #26a9b3; text-decoration: none; font-weight: 500;">${email}</a>
            </div>

            <div style="height: 1px; background: #f0f0f0; margin-bottom: 20px;"></div>

            ${phone ? `
            <!-- Field -->
            <div style="margin-bottom: 20px;">
              <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #26a9b3;">Phone</p>
              <p style="margin: 0; font-size: 15px; color: #343b44; font-weight: 500;">${phone}</p>
            </div>
            <div style="height: 1px; background: #f0f0f0; margin-bottom: 20px;"></div>
            ` : ""}

            <!-- Field -->
            <div>
              <p style="margin: 0 0 8px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #26a9b3;">Message</p>
              <div style="background: #f8f9fb; border-radius: 10px; padding: 16px;">
                <p style="margin: 0; font-size: 14px; color: #343b44; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #26a9b3; color: #ffffff; font-size: 13px; font-weight: 600; text-decoration: none; padding: 12px 28px; border-radius: 100px;">
                Reply to ${name}
              </a>
            </div>

          </div>

          <p style="text-align: center; margin-top: 20px; font-size: 11px; color: #aaa;">GreenYield Consulting · greenyieldconsulting.com</p>
        </div>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
