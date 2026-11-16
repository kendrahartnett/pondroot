export type Fact = { id: string; description: string };
export function buildPayload(facts: Fact[], role: string): { facts: Fact[]; role: string } {
  if (!facts.length || facts.length > 6 || !role.trim() || role.length > 80) throw new Error("Invalid input");
  const ids = new Set<string>();
  const selected = facts.map(({ id, description }) => {
    if (!/^F\d+$/.test(id) || ids.has(id) || !description.trim() || description.length > 500) throw new Error("Invalid fact");
    if (/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(description)) throw new Error("Remove contact details");
    ids.add(id);
    return { id, description };
  });
  return { facts: selected, role };
}

export type DraftBullet = { text: string; sourceFactIds: string[]; approved: false };
function record(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
export function validateSuggestions(output: unknown, facts: Fact[]): DraftBullet[] {
  if (!record(output) || Object.keys(output).join() !== "bullets" || !Array.isArray(output.bullets) || !output.bullets.length || output.bullets.length > 2) throw new Error("Invalid response schema");
  return output.bullets.map((bullet: unknown) => {
    if (!record(bullet) || Object.keys(bullet).sort().join() !== "sourceFactIds,text" || typeof bullet.text !== "string" || !bullet.text.trim() || bullet.text.length > 240 || /[<>]/.test(bullet.text)) throw new Error("Invalid bullet");
    if (!Array.isArray(bullet.sourceFactIds) || !bullet.sourceFactIds.length || bullet.sourceFactIds.some(id => typeof id !== "string" || !facts.some(f => f.id === id))) throw new Error("Unknown source fact");
    const source = facts.filter(f => (bullet.sourceFactIds as string[]).includes(f.id)).map(f => f.description).join(" ");
    const numbers = new Set(source.match(/\d+(?:[.,]\d+)*/g) ?? []);
    if ((bullet.text.match(/\d+(?:[.,]\d+)*/g) ?? []).some(n => !numbers.has(n))) throw new Error("Unsupported numeric claim");
    const restricted = /\b(manager|managed|supervisor|supervised|certified|licensed|expert|director|professional)\b/gi;
    if ((bullet.text.match(restricted) ?? []).some(term => !new RegExp(`\\b${term}\\b`, "i").test(source))) throw new Error("Unsupported responsibility or credential");
    if (/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i.test(bullet.text)) throw new Error("Unexpected contact details");
    return { text: bullet.text, sourceFactIds: [...bullet.sourceFactIds] as string[], approved: false };
  });
}
