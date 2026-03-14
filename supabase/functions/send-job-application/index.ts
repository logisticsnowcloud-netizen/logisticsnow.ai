import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, jobTitle, resumePath } = await req.json();

    if (!name || !email || !phone || !jobTitle) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Get resume public URL if available
    let resumeLink = "";
    if (resumePath) {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data } = await supabase.storage
        .from("resumes")
        .createSignedUrl(resumePath, 60 * 60 * 24 * 30); // 30 days

      if (data?.signedUrl) {
        resumeLink = data.signedUrl;
      }
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const htmlBody = `
      <h2>New Job Application — ${jobTitle}</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td style="padding:8px 16px;font-weight:bold;">Name</td><td style="padding:8px 16px;">${name}</td></tr>
        <tr><td style="padding:8px 16px;font-weight:bold;">Email</td><td style="padding:8px 16px;">${email}</td></tr>
        <tr><td style="padding:8px 16px;font-weight:bold;">Phone</td><td style="padding:8px 16px;">${phone}</td></tr>
        ${resumeLink ? `<tr><td style="padding:8px 16px;font-weight:bold;">Resume</td><td style="padding:8px 16px;"><a href="${resumeLink}">Download Resume</a></td></tr>` : ""}
      </table>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LogisticsNow Careers <onboarding@resend.dev>",
        to: ["smeet@thelogisticsnow.com"],
        subject: `New Application: ${jobTitle} — ${name}`,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error("Resend error:", err);
      throw new Error("Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
