# Contribution Guidelines

This repository contains proprietary software. Contributions are subject to the terms and architectural invariants detailed below.

---

## Code of Conduct

All contributors and team members are required to uphold the standards described in our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## Architectural Principles

1. **Vanilla Standards**: Do not introduce heavy frontend frameworks (React, Angular, Vue) or UI wrapper libraries. Keep page execution lightweight, modular, and fast.
2. **Strict RLS Verification**: Any additions to `supabase_setup.sql` must include strict Row-Level Security policies verifying that clients cannot inspect or modify other clients' records.
3. **Zero Secret Leakage**: Never commit API secret keys, service role credentials, or production environment values.
4. **Input Sanitization**: Ensure all form inputs and URL parameters are sanitized before rendering into the DOM or passing to database queries.

---

## Branch and Commit Conventions

* Branches: `feature/<description>`, `fix/<description>`, `docs/<description>`
* Commits: Follow standard conventional commits format:
  * `feat: add milestone progress bar to client profile`
  * `fix: resolve input sanitization in contact form`
  * `perf: optimize webp image compression for blog assets`
  * `sec: harden rls policy on client invoice table`

---

## Pull Request Guidelines

1. Verify that your branch compiles cleanly and does not introduce console errors.
2. Ensure no credentials or confidential client data are included in changes.
3. Submit a Pull Request targeting the `main` branch and complete the security checklist.
