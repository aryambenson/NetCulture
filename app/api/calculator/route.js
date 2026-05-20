import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const pages = Number(body.pages || 8);
  const complexity = Number(body.complexity || 2);
  const base = 85000 + pages * 9500 + complexity * 52000;

  return NextResponse.json({
    ok: true,
    estimate: {
      low: Math.round(base / 10000) * 10000,
      high: Math.round((base * 1.38) / 10000) * 10000,
      currency: "INR"
    }
  });
}
