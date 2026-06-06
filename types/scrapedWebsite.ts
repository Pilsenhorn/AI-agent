export interface ScrapedWebsite {
  url: string;

  markdown: string;

  title: string;

  description: string;

  metadata: Record<string, unknown>;
}