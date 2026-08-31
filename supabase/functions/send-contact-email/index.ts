import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface ContactPayload {
  name: string;
  title?: string;
  organization?: string;
  email: string;
  inquiry?: string;
  message: string;
}

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';
const TO_EMAIL = 'contact@phareconsultinggroup.com';
const FROM_EMAIL = 'Phare Consulting Group <onboarding@resend.dev>';

function esc(str: string) {
  return String(str ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c] as string));
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'Email service not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  let body: ContactPayload;
  try { body = await req.json(); } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const { name, email, message, title, organization, inquiry } = body ?? {} as ContactPayload;
  if (!name || !email || !message ||
      typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' ||
      name.length > 200 || email.length > 200 || message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid input' }), {
      status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const html = `
    <div style="font-family:Georgia,serif;max-width:640px;color:#1a1a1a;">
      <h2 style="border-bottom:1px solid #ccc;padding-bottom:8px;">New letter — phareconsultinggroup.com</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      ${title ? `<p><strong>Title:</strong> ${esc(title)}</p>` : ''}
      ${organization ? `<p><strong>Organization:</strong> ${esc(organization)}</p>` : ''}
      <p><strong>Email:</strong> ${esc(email)}</p>
      ${inquiry ? `<p><strong>Room:</strong> ${esc(inquiry)}</p>` : ''}
      <hr />
      <p style="white-space:pre-wrap;">${esc(message)}</p>
    </div>
  `;

  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New letter from ${name}${organization ? ` (${organization})` : ''}`,
      html,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('Resend error', res.status, data);
    return new Response(JSON.stringify({ error: 'Failed to send', details: data }), {
      status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true, id: data.id }), {
    status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
