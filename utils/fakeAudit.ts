import { AuditResult } from "@/types/audit";

export const fakeAudit: AuditResult = {
  overallScore: 78,

  summary:
    "Web působí profesionálně, ale jeho hlavní hodnota není okamžitě zřejmá.",

  strengths: [
    "Přehledná struktura",
    "Dobrá důvěryhodnost",
    "Moderní vzhled",
  ],

  weaknesses: [
    "Slabé CTA",
    "Není jasná hlavní nabídka",
    "Chybí sociální důkaz",
  ],

  opportunities: [
    "Přidat reference",
    "Zlepšit hero sekci",
    "Zdůraznit benefity",
  ],

  quickWins: [
    "Přidat tlačítko v hero",
    "Zvětšit hlavní nadpis",
    "Doplnit fotografie klientů",
  ],

  personalization:
    "Na webu je patrný důraz na kvalitu, což lze využít v osobním oslovení.",

  emailDraft:
    "Dobrý den, při procházení Vašeho webu jsem si všiml několika příležitostí ke zvýšení konverzí...",
};