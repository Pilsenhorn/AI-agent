export interface AuditResult {
  overallScore: number;

  summary: string;

  strengths: string[];

  weaknesses: string[];

  opportunities: string[];

  quickWins: string[];

  personalization: string;

  emailDraft: string;
}