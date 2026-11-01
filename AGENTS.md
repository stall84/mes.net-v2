# AGENTS.md — mes-new (personal-website)

Project-specific instructions for any coding agent (e.g. `infra-coder-1`) working in this
repository. This is in addition to, not a replacement for, an agent's own system prompt
and safety boundaries.

## Project overview

- Personal portfolio website: React 18 + TypeScript + Vite (see
  [docs/adr/0001-use-react-typescript-vite-stack.md](docs/adr/0001-use-react-typescript-vite-stack.md)).
- Deployed to AWS (S3 + CloudFront) via Terraform in [infra/](infra/), with DNS/SSL through
  Cloudflare. See [docs/adr/0000-index.md](docs/adr/0000-index.md) for the full decision history.
- Package manager: npm (`package-lock.json` is the source of truth; don't switch package
  managers).

## Commands (not exhaustive list)

- Install: `npm ci` (preferred for reproducible installs) or `npm install`
- Build: `npm run build` (`tsc && vite build`)
- Test: `npm test` (vitest)
- Lint: `npm run lint`
- Do **not** run `npm run dev` / `npm run preview` in an automated/unattended session —
  they start long-running servers that never exit.

## Conventions

- Keep dependencies minimal; avoid adding a new framework/heavy library without first
  writing an ADR under `docs/adr/` (see the existing files there for format/precedent).
- `infra/*.tf` is Terraform IaC — do not modify it as part of a dependency-only task unless
  explicitly asked.
- This agent cannot `git commit`/`push`: leave changes staged in the working tree and
  summarize what changed plus how it was verified, for a human to review and commit.

## Dependency Upgrade Policy

When asked to check for or apply dependency upgrades in this project:

1. **Survey first.** Run `npm outdated` and `npm audit` to see what's out of date and
   whether anything has a known vulnerability. Read `package.json` /
   `package-lock.json` before changing anything.
2. **Minimum release age (supply-chain cooldown):** before upgrading to a specific new
   version, check when it was published with `npm view <package> time --json` (or
   `npm view <package>@<version> time.<version>`). **Do not upgrade to a version
   published less than 7 days ago**, even if `npm outdated`/`npm audit` suggests it —
   wait for it to clear the cooldown, unless it's the only version that fixes an actively
   exploited, currently-disclosed vulnerability (call this out explicitly if you override
   the cooldown).
3. **Classify each update:**
   - *Patch/minor, semver-compatible with the existing `^range` in `package.json`, no
     known breaking changes:* apply directly.
   - *Major version bump, or anything that would require code changes to adopt:* don't
     apply silently. Research the changelog/release notes, summarize breaking changes and
     the migration work required, and only apply it if the task explicitly authorizes a
     major upgrade. Otherwise just report the finding.
   - *Security advisories from `npm audit`:* prioritize regardless of semver size, but
     still check the release-age cooldown and for breaking changes first.
4. **Apply and refresh the lockfile.** After editing `package.json`, run `npm install` to update `package-lock.json`.
   sync.
5. **Verify.** Run `npm run build` and `npm test`. If either fails because of a specific
   upgrade, revert or fix just that package and say so in your summary — don't leave the
   project in a broken state.
6. **Document when it matters.** Write a new ADR only for a major/breaking upgrade or a
   dependency, swap/removal, or shim requirement. 
7. **Report clearly.** List every package you upgraded (old → new version), every package
   you flagged but didn't touch (and why), and the commands you ran to verify, so the
   result can be reviewed and committed by a human.

### Dependency upgrade failure or error policy

- If an upgrade fails, stop further upgrade attempts and report the command, error, and affected package.
- Report Node/npm versions and relevant requirements when those details are available (`npm audit`, `npm view <package-name> engines`, `node --version` etc can be used for this).
- Summarize likely cause and a safe next step. Do not make speculative environment changes.
- If the attempt left partial changes, restore only changes introduced by that attempt; preserve pre-existing work.
- Document the failure in an ADR only when the upgrade warrants one under Step 6.
- For *all* types of failures or errors, including those you'd write an ADR for, create a simple textual log file in this project's root directory called `upgrade-errors.log` and a description of the failure, and suggested solutions. 

### Out of scope for dependency-only tasks

- `infra/*.tf` (Terraform) and AWS/Cloudflare configuration
- Content/copy changes under `src/pages/` and `public/`

