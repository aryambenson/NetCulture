import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: body.score >= 82 ? "priority" : "new",
    source: "netculture-website",
    ...body
  };

  return NextResponse.json({
    ok: true,
    lead,
    nextActions: ["crm.createLead", "whatsapp.notify", "analytics.conversion", "email.sequence"]
  });
}
