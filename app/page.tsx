"use client";
import { AuditResult } from "@/types/audit";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [audit, setAudit] = useState<AuditResult | null>(null);

  async function handleAnalyze() {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    setAudit(data);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">
        AI Audit Agent
      </h1>

      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded px-4 py-2 w-full max-w-xl"
      />

      <button
        onClick={handleAnalyze}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Analyze
      </button>

      {audit && (
        <div className="border rounded p-6 w-full max-w-3xl space-y-6">

          <div>
            <h2 className="text-2xl font-bold">
              Score: {audit.overallScore}/100
            </h2>
          </div>

          <div>
            <h3 className="font-bold">
              Summary
            </h3>

            <p>{audit.summary}</p>
          </div>

          <div>
            <h3 className="font-bold">
              Strengths
            </h3>

            <ul className="list-disc pl-6">
              {audit.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold">
              Weaknesses
            </h3>

            <ul className="list-disc pl-6">
              {audit.weaknesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">
              Opportunities
            </h3>

            <ul className="list-disc pl-6">
              {audit.opportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">
              Quick Wins
            </h3>
            
            <ul className="list-disc pl-6">
              {audit.quickWins.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">
              Personalization
            </h3>

            <p>{audit.personalization}</p>
          </div>
          <div>
            <h3 className="font-bold">
              Email Draft
            </h3>
            <p>{audit.emailDraft}</p>
          </div>
        </div>
      )}
    </main>
  );
}