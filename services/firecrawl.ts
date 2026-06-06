import FirecrawlApp from "@mendable/firecrawl-js";
import { ScrapedWebsite } from "@/types/scrapedWebsite";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY!,
});

export async function scrapeWebsite(
  url: string
): Promise<ScrapedWebsite> {

  const result = await firecrawl.scrapeUrl(url, {
    formats: ["markdown"],
  });

  return {
    url,

    markdown: result.markdown ?? "",

    title:
      String(result.metadata?.title ?? ""),

    description:
      String(result.metadata?.description ??
      result.metadata?.Description ??
      ""),

    metadata:
      result.metadata ?? {},
  };
}