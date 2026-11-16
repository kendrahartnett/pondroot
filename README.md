# pondroot

A STRONGER START. A CLEARER PATH.

Week 10 setup and feasibility spike for an accessible digital job-search preparation application. The public page is intentionally an empty shell. It does not accept private information or expose an AI API.

## Reference and stack

Phase 2 reference: `the-bridge`. Next.js App Router, React, TypeScript, Drizzle ORM, Neon PostgreSQL and Neon Auth, with Vercel hosting. Drizzle was chosen because this is the reference project's actual ORM and matches its Neon Auth setup. The previous project is inspected read-only; its database, auth secrets, and deployment identity are not reused.

## Commands

- `npm install` installs locked dependencies once package-lock.json exists.
- `npm run dev` serves the empty shell locally.
- `npm run typecheck` checks TypeScript, including spike/test code.
- `npm run build` creates a production build.
- `npm run test:spike` checks bounded spike rules; these do not replace the floor's future test suite.
- `npm run spike:ai` runs synthetic-only AI cases, using an API key in the process environment. It never deploys an endpoint.
- `npm run spike:pdf` creates synthetic résumé fixtures locally for extraction and visual verification.

The current scope is setup and a synthetic-only integration spike. Private discovery/planning documents and generated evidence stay local and are not included in this public repository. No database migrations or account features are required to deploy this empty shell. NextMove was the previous working title.

## Selected brand assets

The approved art direction uses a translucent glowing green seed and roots on a dark pond background. The generated background and transparent wordmark are under `public/brand/`. They are saved for the upcoming UI build; the deployed setup page does not yet implement the selected mockup. Core application text and controls will remain accessible HTML rather than being embedded in the background image.
