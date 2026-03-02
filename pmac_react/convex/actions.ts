import { v } from "convex/values";
import { action } from "./_generated/server";
import { Resend } from "resend";

export const sendLeadEmail = action({
  args: {
    fullName: v.string(),
    email: v.string(),
    message: v.optional(v.string()),
    phoneNumber: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.warn("⚠️ Email Not Sent: RESEND_API_KEY is not set in Convex Environment Variables.");
      console.log("Details:", {
        to: "Admin",
        subject: `New Lead: ${args.fullName}`,
        data: args
      });
      return;
    }

    const resend = new Resend(RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: 'PMAC Leads <onboarding@resend.dev>', // Update this once you verify your domain
        to: ['yasinnew72@gmail.com'], // Updated to match your verified Resend account email
        subject: `🚀 New Lead Captured: ${args.fullName}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
            <div style="background-color: #2b0a3d; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Lead Alert</h1>
            </div>
            <div style="padding: 30px;">
              <p style="font-size: 16px; color: #333;">You have captured a new lead from the <strong>PMAC Website</strong>.</p>
              
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px; width: 120px;">Full Name:</td>
                    <td style="padding: 8px 0; color: #111; font-weight: bold;">${args.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px;">Email:</td>
                    <td style="padding: 8px 0; color: #111; font-weight: bold;"><a href="mailto:${args.email}" style="color: #2b0a3d; text-decoration: none;">${args.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-size: 14px;">Phone:</td>
                    <td style="padding: 8px 0; color: #111;">${args.phoneNumber || 'Not provided'}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 25px;">
                <h3 style="font-size: 14px; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">Message / Requirement:</h3>
                <div style="background-color: #fff; border-left: 4px solid #2b0a3d; padding: 15px; font-style: italic; color: #444; background-color: #fefefe;">
                  "${args.message || 'No additional details provided.'}"
                </div>
              </div>

              <div style="margin-top: 40px; text-align: center;">
                <a href="https://pmac.com/admin-portal" style="background-color: #2b0a3d; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">View in Admin Portal</a>
              </div>
            </div>
            <div style="background-color: #f4f4f4; padding: 15px; text-align: center; color: #888; font-size: 12px;">
              &copy; ${new Date().getFullYear()} PMAC Industrial Solutions. All rights reserved.
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
      } else {
        console.log("Email sent successfully:", data?.id);
      }
    } catch (err) {
      console.error("Failed to send email:", err);
    }
  },
});

export const sendAutoReplyEmail = action({
  args: {
    fullName: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
      console.warn("⚠️ Auto-Reply Not Sent: EmailJS environment variables are missing.");
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          accessToken: PRIVATE_KEY, // This authorizes server-side calls
          template_params: {
            user_name: args.fullName,
            user_email: args.email,
            reply_to: "yasinnew72@gmail.com",
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`EmailJS failed: ${errorText}`);
      }

      console.log("✅ Auto-reply sent via EmailJS to:", args.email);
    } catch (err) {
      console.error("❌ Failed to send auto-reply:", err);
    }
  },
});
