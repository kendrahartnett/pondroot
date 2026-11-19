# Pondroot project instructions

## Scope and sources

Build the approved guest-first employment-preparation application in the user's requested phase only. The selected visual direction is Stillwater. Core screen-flow review is complete; written interview practice is included; the AI interview simulator, cloud resume saving/authentication and persistent account dashboard are deferred.

Read README.md, docs/BUILD_BRIEF.md, docs/ACCEPTANCE.md and docs/PHASES.md before a phase. These are the sanitized public build baseline. If local docs/planning exists, its Planning_Index.md, Phase_Build_Workflow.md, Phase_Progress.md and relevant flow/architecture/evaluation files supply approved detail. Do not require private files in a fresh clone or publish them to satisfy an instruction-file reference. Original and historical sources remain preserved; current user decisions govern over older material.

## Phase contract

The user requested: one phase built, reviewed, tested, committed and pushed, then repeat. Starting a phase authorizes its bounded implementation, appropriate local checks and corrections. It does not authorize automatically building later phases, paid service provisioning or production deployment.

1. Read the current phase brief and progress record; inspect Git status/branch/remotes and preserve unrelated work. State the phase's outcome and boundaries briefly, then build it. Do not ask the owner to approve already approved flows or routine implementation details again.
2. Run appropriate checks before presenting the phase. Use actual project commands after setup; tests must verify meaningful acceptance behavior. Report failures, blocked checks and untested environments honestly. Writing a test or screenshot is not a pass.
3. Present the working result or reviewable artifact, changed behavior, observed checks, limits and a short owner walkthrough. Stop before commit/push for this review checkpoint unless the owner explicitly authorized a different sequence. The checkpoint comes from this requested phase workflow, not an inferred universal Git policy.
4. Apply requested phase fixes, then rerun affected checks. After the owner's explicit phase approval with commit/push instruction, commit and push the reviewed phase without asking the same permission again. Approval of one phase does not approve a later phase.
5. Stage only reviewed, appropriate files. Record the actual commit hash and push result; verify the remote branch tip when available. On a failed/rejected push, keep the local commit and report what remains; never claim completion. Update the phase record and stop. Begin another phase only on an instruction covering it.

Documentation/workflow preparation is not application implementation. No application is initialized merely by creating this file.

## Git and publication boundaries

Default implementation branch: `codex/pondroot-build`, created or selected during explicitly started Phase 0 after inspecting local/remote state. Keep a linear sequence of phase commits on it. Never force-push, rewrite published history, overwrite another person's changes or merge/push main without explicit user instruction. A PR/merge is separate unless requested. Respect any actual branch protection; do not bypass it.

Before a first push, inspect remote/repository visibility and configured CI/deployment behavior as accessible. Do not publish private sources, real persona details, research contacts/results, resumes, API request content, downloaded personal files, credentials or environment files. Full local planning documents are not automatically cleared for publication. Prepare sanitized implementation guidance and a reviewed ignore configuration in Phase 0; do not use blanket staging. Do not change repository visibility or deployment settings on the owner's behalf without an instruction covering that action. Explain any unresolved exposure or automatic deployment behavior before the concrete affected push.

Phase 0 has no app tests yet. Review its documentation/ignore/staging choices rather than inventing passing application checks. After setup, record real install/dev/build/typecheck/lint/test commands here or in the public development guide, based on installed versions.

## Product and data rules

- React/Next.js/TypeScript, one original single-column text-based PDF template and versioned editable local draft files. Browser-only PDF and draft import/export; contact details remain out of normal AI requests. No hidden resume persistence in browser storage or server database.
- Claude Sonnet through a server-only API boundary, exact selected-data consent, supported suggestions and individual accept/edit/reject. No invented qualifications/metrics/dates, no silent approval or background rewrites. Changing facts invalidates dependent approvals. Clearing invalidates late AI/import/PDF work.
- Manual completion remains available. Documents and learning never gate resumes. Document guidance is reviewed/deterministic, A OR B+C in the general case, with official obtaining-help resources and uncertainty handling; no legal eligibility verdict or scans/numbers.
- Keep the application warm, readable, responsive and accessible. Live readable preview, mobile Edit/Preview, distinct Download PDF / Print resume / Save editable draft actions, honest error/recovery and file guidance for unfamiliar digital job seekers.
- Keep operational-only Neon and analytics separate from resume/contact/document content. No paid API calls without numeric caps and reviewed setup. No key in chat, public bundles or committed files. No outreach or real application submission.
- Use synthetic people/data in tests, screenshots and public examples. Follow docs/ACCEPTANCE.md and, when available locally, the detailed private AI evaluation plan. Local mocked tests and live model outputs have separate counts. No known severe safety/privacy/accessibility defect is averaged away.

## Evidence and handoff

Keep sanitized public phase status in docs/PHASES.md. When private local planning exists, use docs/planning/Phase_Progress.md for detailed evidence. Never publish personal source observations or invent missing private records. Track task/story/test IDs, relevant versions, actual checks, owner feedback, fixes and actual commit/push results. Do not claim independent review unless it occurred. No agents/delegation unless the user or other applicable instructions explicitly request it.

The .gitignore exclusions are deliberate guards, not a security boundary. Never force-add private planning/source documents, personal exports, credentials or research data. Inspect the concrete proposed/staged diff, including binaries. New ignore rules do not protect files already tracked in history. Missing required brand assets must be identified for intentional review, not approximated or copied from unrelated folders. Record real install/dev/build/typecheck/lint/test commands in Phase 1 based on the installed toolchain; Phase 0 has no app checks.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
