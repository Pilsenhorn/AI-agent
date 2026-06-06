import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    FIRECRAWL_API_KEY: process.env.FIRECRAWL_API_KEY ?? "UNDEFINED",
  });
}