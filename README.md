# Pondroot

Pondroot is a planned employment-preparation application for people returning home after incarceration and others navigating unfamiliar digital hiring processes. It helps people describe real experience, prepare a truthful resume, understand document options and learn practical application steps.

## Current state

Phase 0 was merged into main. Phase 1 is in local review preparation on `codex/phase-1-foundation`: a Stillwater guest home and navigation previews. Later tools are not implemented. See [development commands](docs/DEVELOPMENT.md). Phase 1 has not been committed or pushed.

The approved first release includes guest access, a session home, PowerSkills and complete resume editing, optional Claude Sonnet wording assistance with explicit review, editable local drafts, PDF/printing, reviewed document guidance and Transparent Hiring Information with written interview practice. AI interview simulation and cloud resume accounts are deferred.

## Build guidance

- [Build brief](docs/BUILD_BRIEF.md): approved experience, visual direction, architecture and scope.
- [Acceptance criteria](docs/ACCEPTANCE.md): stories, observable behaviors and release evidence.
- [Phases and checkpoints](docs/PHASES.md): sequence, status and closure rules.
- [Project instructions](AGENTS.md): guidance for Codex working in this repository.

Public guidance is self-contained. Private source documents, detailed planning records, research material, personal resumes and source wireframes stay outside version control. They are not needed to understand this sanitized baseline.

## Development and deployment

React, Next.js and TypeScript are selected. Phase 1 establishes compatible pinned dependencies and actual installation/development/verification commands. Phase 0 has no package manifest or runnable app; do not treat placeholder commands as tested setup.

Build and check one phase, present it for owner review, address feedback, and commit/push only when that phase is approved. Stop before the next phase unless instructed to continue. Merging main and deploying are separate actions.

No API key is needed for the manual resume milestone. Paid AI calls require protected server configuration, reviewed terms and numerical spending limits. Never put secrets, personal resumes or sensitive source text in commits, logs or analytics.
