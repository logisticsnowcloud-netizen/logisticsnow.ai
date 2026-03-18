import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company_name, designation, contact_number, date, time, heardFrom, newsletter } = await req.json();

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const mailingList = [
      "connect@logisticsnow.in",
      "raj@logisticsnow.in",
      "associate@logisticsnow.in",
      "sale@thelogisticsnow.com",
    ];

    const htmlBody = `
      <h2>New Demo Request from LoRRI Website</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border:1px solid #ddd;">${company_name || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Designation</td><td style="padding:8px;border:1px solid #ddd;">${designation || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Contact</td><td style="padding:8px;border:1px solid #ddd;">${contact_number}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Date</td><td style="padding:8px;border:1px solid #ddd;">${date}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Time</td><td style="padding:8px;border:1px solid #ddd;">${time}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Heard From</td><td style="padding:8px;border:1px solid #ddd;">${heardFrom || "-"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Newsletter</td><td style="padding:8px;border:1px solid #ddd;">${newsletter ? "Yes" : "No"}</td></tr>
      </table>
    `;

    const subject = `Demo Request for LoRRI${name ? ` (Name - ${name}` : ""}${company_name ? ` & Company - ${company_name})` : name ? ")" : ""}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "LoRRI <onboarding@resend.dev>",
        to: mailingList,
        subject,
        html: htmlBody,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";

    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
