import FirecrawlApp from "@mendable/firecrawl-js";
import { NextResponse } from "next/server";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await firecrawl.scrapeUrl(body.url, {
      formats: ["markdown"],
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}