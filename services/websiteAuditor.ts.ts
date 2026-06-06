import { AuditResult } from "@/types/audit";
import { ScrapedWebsite } from "@/types/scrapedWebsite";
import { fakeAudit } from "@/utils/fakeAudit";

export async function auditWebsite(
  website: ScrapedWebsite
): Promise<AuditResult> {

  void website;
  return fakeAudit;

  return {
    overallScore: 0,

    summary: "",

    strengths: [],

    weaknesses: [],

    opportunities: [],

    quickWins: [],

    personalization: "",

    emailDraft: "",
  };
}