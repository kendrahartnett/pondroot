import { describe, expect, it } from "vitest";
import { buildPayload, validateSuggestions } from "./resume-rules";

const facts = [{ id: "F1", description: "Repaired bicycles for neighbors and explained maintenance needs." }];
const valid = { bullets: [{ text: "Repaired bicycles for neighbors.", sourceFactIds: ["F1"] }] };

describe("bounded résumé spike rules", () => {
  it("includes selected facts and role without contact or account fields", () => {
    const input = { ...facts[0], email: "fictional@example.test", accountId: "private-id" };
    expect(buildPayload([input], "Customer support")).toEqual({ facts, role: "Customer support" });
  });
  it("accepts factual suggestions as drafts only", () => {
    expect(validateSuggestions(valid, facts)).toEqual([{ ...valid.bullets[0], approved: false }]);
  });
  it("rejects invented numerical achievements", () => {
    expect(() => validateSuggestions({ bullets: [{ text: "Repaired 100 bicycles.", sourceFactIds: ["F1"] }] }, facts)).toThrow();
  });
  it("rejects a source reference that was not supplied", () => {
    expect(() => validateSuggestions({ bullets: [{ text: "Repaired bicycles.", sourceFactIds: ["F9"] }] }, facts)).toThrow();
  });
  it("rejects an unsupported promotion or credential", () => {
    for (const text of ["Managed a bicycle repair team.", "Certified bicycle mechanic.", "Worked as a supervisor."]) {
      expect(() => validateSuggestions({ bullets: [{ text, sourceFactIds: ["F1"] }] }, facts)).toThrow();
    }
  });
  it("rejects more than two suggestions and unexpected fields", () => {
    expect(() => validateSuggestions({ bullets: [...valid.bullets, ...valid.bullets, ...valid.bullets] }, facts)).toThrow();
    expect(() => validateSuggestions({ ...valid, secret: "unexpected" }, facts)).toThrow();
  });
  it("rejects malformed responses without changing facts", () => {
    expect(() => validateSuggestions({ content: "not the expected schema" }, facts)).toThrow();
    expect(facts[0].description).toBe("Repaired bicycles for neighbors and explained maintenance needs.");
  });
  it("rejects empty or oversized facts before dispatch", () => {
    expect(() => buildPayload([{ id: "F1", description: " " }], "Service")).toThrow();
    expect(() => buildPayload([{ id: "F1", description: "a".repeat(501) }], "Service")).toThrow();
  });
});
