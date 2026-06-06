"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  async function handleAnalyze() {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    setResult(JSON.stringify(data, null, 2));
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

      {result && (
        <div className="border p-4 rounded w-full max-w-xl">
          {result}
        </div>
      )}
    </main>
  );
}