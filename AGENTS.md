# pondroot setup and implementation rules

- Use the confirmed Phase 2 reference, the-bridge: Next.js App Router, React, TypeScript, Drizzle, Neon PostgreSQL, Neon Auth, and Vercel.
- The Week 10 plan governs scope over the broader PRD. Build the floor before above-floor features.
- Inspect installed Next.js documentation before version-sensitive changes.
- Setup and spikes are bounded feasibility work, not a production résumé/AI service. Keep spikes out of deployment.
- Use synthetic facts only in spikes. Do not copy Phase 2 database credentials, auth cookies, users, data, or deployment identity into pondroot.
- Secrets must not appear in source, output, logs, URLs, commits, or browser bundles.
- Record observed test failures before changing implementation. Never weaken accepted expectations to obtain a pass. Log deliberate requirement changes.
- Do not claim live AI success, deployment, visual PDF verification, or user validation without actual evidence.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
