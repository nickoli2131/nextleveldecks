import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: "RESEND_API_KEY not set" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { type, data } = await req.json();
    const ownerEmail = "Nick@nextlevel-decks.com";
    const emails: Array<{ from: string; to: string[]; subject: string; html: string }> = [];

    if (type === "contact") {
      const { name, email, phone, message } = data;

      // Notification to owner
      emails.push({
        from: "Next Level Decks <hello@nextlevel-decks.com>",
        to: [ownerEmail],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || "Not provided"}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>
          <hr/>
          <p style="color:#888;">Sent from nextlevel-decks.com contact form</p>
        `,
      });

      // Confirmation to customer (only if they provided email)
      if (email) {
        emails.push({
          from: "Next Level Decks <hello@nextlevel-decks.com>",
          to: [email],
          subject: "We received your message – Next Level Decks",
          html: `
            <h2>Thanks for reaching out, ${name}!</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p>If you need immediate assistance, call us at <a href="tel:+14253971550">(425) 397-1550</a>.</p>
            <br/>
            <p>– The Next Level Decks Team</p>
          `,
        });
      }
    } else if (type === "estimate") {
      const {
        project_type, material, length, width, railing_lf,
        deck_height, fence_height, needs_removal, post_type,
        small_gates, large_gates, estimate_low, estimate_high,
        contact_email, contact_phone, project_phase,
      } = data;

      const detailsHtml = `
        <h3>Project Details</h3>
        <p><strong>Type:</strong> ${project_type}</p>
        <p><strong>Material:</strong> ${material}</p>
        ${project_type === "deck" ? `
          <p><strong>Dimensions:</strong> ${length}' × ${width}'</p>
          <p><strong>Deck Height:</strong> ${deck_height || "N/A"}</p>
          <p><strong>Railing:</strong> ${railing_lf || 0} linear ft</p>
        ` : `
          <p><strong>Length:</strong> ${length} linear ft</p>
          <p><strong>Fence Height:</strong> ${fence_height || "N/A"}</p>
          <p><strong>Post Type:</strong> ${post_type || "N/A"}</p>
          <p><strong>Needs Removal:</strong> ${needs_removal ? "Yes" : "No"}</p>
          <p><strong>Small Gates:</strong> ${small_gates || 0}</p>
          <p><strong>Large Gates:</strong> ${large_gates || 0}</p>
        `}
        <p><strong>Estimate Range:</strong> $${estimate_low?.toLocaleString()} – $${estimate_high?.toLocaleString()}</p>
        <p><strong>Project Phase:</strong> ${project_phase || "Not specified"}</p>
      `;

      // Notification to owner
      emails.push({
        from: "Next Level Decks <onboarding@resend.dev>",
        to: [ownerEmail],
        subject: `New ${project_type} Estimate – $${estimate_low?.toLocaleString()}–$${estimate_high?.toLocaleString()}`,
        html: `
          <h2>New Estimate Submission</h2>
          <p><strong>Email:</strong> ${contact_email || "Not provided"}</p>
          <p><strong>Phone:</strong> ${contact_phone || "Not provided"}</p>
          ${detailsHtml}
          <hr/>
          <p style="color:#888;">Sent from nextlevel-decks.com estimate tool</p>
        `,
      });

      // Confirmation to customer
      if (contact_email) {
        emails.push({
          from: "Next Level Decks <onboarding@resend.dev>",
          to: [contact_email],
          subject: "Your Project Estimate – Next Level Decks",
          html: `
            <h2>Your Estimate Details</h2>
            <p>Thanks for using our estimate tool! Here's a summary:</p>
            ${detailsHtml}
            <br/>
            <p>This is a rough estimate. For an accurate quote, call us at <a href="tel:+14253971550">(425) 397-1550</a> or reply to this email.</p>
            <br/>
            <p>– The Next Level Decks Team</p>
          `,
        });
      }
    }

    // Send all emails
    const results = await Promise.all(
      emails.map((email) =>
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify(email),
        })
      )
    );

    const allOk = results.every((r) => r.ok);
    if (!allOk) {
      const errors = await Promise.all(results.map((r) => r.text()));
      console.error("Email send errors:", errors);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
