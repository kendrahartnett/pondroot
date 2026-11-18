# Pondroot phases and checkpoints

## Current state

Phase 0 is **ready for owner review**. Proposed baseline: .gitignore, .gitattributes, AGENTS.md, README.md and these three docs files. No app was scaffolded, files staged, phase commit made or push attempted. Detailed local review records stay excluded.

Work branch: codex/pondroot-build, created from inspected main. The repository is public. GitHub metadata reports no Actions workflows; external deployment/webhook settings remain unverified. Recheck actual state/diff and unresolved triggers before a later first push. This status is not publication authorization.

## One-phase cycle

1. Read guidance/acceptance, inspect Git/current state and preserve unrelated work.
2. Build only the named phase and run initial checks; fix failures.
3. Present the working result/artifact, checks, limits and walkthrough; stop before commit/push.
4. Apply feedback/retest; after explicit approval covering commit/push, publish only reviewed appropriate paths.
5. Report actual commit/push/remote verification, update evidence and stop before the next phase unless instructed otherwise.

Approval cannot waive safety failures; tests cannot replace owner review. Failed push is not completion. Never force-push/rewrite history or merge/push main without instruction. Default is one work branch with focused phase commits; respect actual branch protection. Deployment and PR/merge are separate actions.

## Phase map

| Phase | Deliverable | Review focus |
| --- | --- | --- |
| 0 Baseline | Sanitized guidance, publication/ignore policy and repository review | Self-contained public guidance, deliberate local exclusions, no app scaffolding. |
| 1 Foundation | Compatible Next.js/React/TypeScript and accessible responsive Stillwater guest home/navigation | Actual UI/assets/CTAs/focus/reflow and real dev/check commands. |
| 2 Manual resume | Source/content model, guided complete sections and live/mobile preview | Truthful edits/navigation, no account or AI dependency. |
| 3 Files/print | Local drafts, safe import/clear, PDF/view/download/print | Create-save-clear-open-revise-export; actual devices and error/cancel behavior. |
| 4 AI | Server Claude, operational limits, consent and review | Caps before calls, provenance, initial benchmark, privacy and manual fallback. |
| 5 Documents | Reviewed deterministic options and official obtaining help | Supported cases/uncertainty, no eligibility verdict or resume gate. |
| 6 Hiring information | Three lesson groups, reviewed videos and written interview practice | Useful text/file concepts, reviewed content, no simulator; resume retained. |
| 7 Analytics | Reviewed minimal provider/event/reporting | Actual retention/data boundaries, declined/blocked tasks still usable. |
| 8 Integrated checks | Extreme/privacy/access checks and frozen live AI evaluation/fixes | Current observed evidence; earlier phases already check relevant behavior. |
| 9 User evaluation | Voluntary stable-version tasks and fixes/retests | Independent comprehension/recovery; honest counts, no invented results. |
| 10 Release readiness | Ownership, disable/rollback/incident rehearsal and final checklist | Gates, funded limits, maintenance, separate deployment/merge approval. |

Agree bounded subphases if needed; don't call a parent complete from a partial slice. Reviews/fixes/Git use the same hours, not extra free time. Reforecast remaining capacity and arrange users/content review early rather than defer preparation until implementation phases. No next phase starts automatically.

## Status

| Phase | State | Commit | Push |
| --- | --- | --- | --- |
| 0 | Ready for owner review | None | Not attempted |
| 1-10 | Not started | None | Not attempted |

Future closure records sanitized scope, actual checks, owner review and Git evidence. Do not invent the hash of a commit containing this status; report the actual hash in the handoff/local ledger after commit/push, and include it in a later reviewed update if useful. Keep private observations and files local.

## Handoff prompts

Start: "Read project guidance. Start Phase N only, implement its acceptance, run checks and show the result. Stop for my review before committing/pushing or starting another phase."

Approve: "I approve Phase N. Run affected checks, commit only reviewed appropriate changes and push to codex/pondroot-build. Verify/report the result, update evidence and stop. Do not merge main or deploy."

Changes: "Keep working on Phase N. Make these changes, retest and return for review. Do not commit, push or start another phase yet."

Examples are not current authorization to execute their quoted actions.
