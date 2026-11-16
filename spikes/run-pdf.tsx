import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { mkdirSync, readFileSync, existsSync } from "node:fs";
import { ResumeDocument } from "./resume-document";

async function main() {
  mkdirSync("output/pdf", { recursive: true });
  const fallback = ["Repaired bicycles for neighbors and explained maintenance needs.", "Helped new team members learn kitchen preparation routines."];
  let bullets = fallback;
  const aiPath = "output/setup/ai-results.json";
  if (existsSync(aiPath)) {
    const results = JSON.parse(readFileSync(aiPath, "utf8"));
    const found = results.results.find((r: { ok: boolean; humanReview?: { status: string } }) => r.ok && r.humanReview?.status === "accepted");
    if (found) bullets = found.bullets.map((b: { text: string }) => b.text);
  }
  await renderToFile(<ResumeDocument bullets={bullets} />, "output/pdf/synthetic-resume.pdf");
  await renderToFile(<ResumeDocument bullets={bullets} long />, "output/pdf/synthetic-resume-overflow.pdf");
  console.log("Created two synthetic PDF fixtures; extraction and visual checks still required.");
}
main().catch(() => { console.error("PDF renderer failed; no completed export claim."); process.exitCode = 1; });
