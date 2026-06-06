import { NextResponse } from "next/server";
import { scrapeWebsite } from "@/services/firecrawl";
import { auditWebsite } from "@/services/websiteAuditor.ts";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const scraped = await scrapeWebsite(body.url);
    const audit = await auditWebsite(scraped);


    return NextResponse.json(audit);
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