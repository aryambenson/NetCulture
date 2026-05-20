import { NextResponse } from "next/server";

export async function POST(request) {
  const event = await request.json();

  return NextResponse.json({
    ok: true,
    received: {
      ...event,
      serverTime: new Date().toISOString()
    },
    destinations: ["Google Analytics", "Google Tag Manager", "Meta Pixel", "CRM"]
  });
}
