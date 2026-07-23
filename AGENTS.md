# Repo Instructions

## Obsidian Theme Work

- Use official Obsidian Developer Documentation as the first reference for theme behavior, CSS variables, selectors, and publish requirements.
- Prefer documented Obsidian CSS variables over ad hoc overrides.
- For Mermaid styling, start from the official Mermaid CSS variables reference:
  `https://docs.obsidian.md/Reference/CSS+variables/Editor/Mermaid`

## CSS Lint Rules

- Do not use `!important`.
- Do not use `:has()` selectors for theme fixes.
- Fix override conflicts with documented CSS variables, selector specificity, or narrow structural selectors.
- When increasing specificity, prefer lint-safe patterns already used in this repo, such as fake-ID specificity inside `:is(...)`, only when variables are insufficient.

## Workflow

- Inspect existing theme patterns before editing.
- Make the smallest correct change.
- Validate with text search for banned CSS:
  `rg -n "!important|:has\\(" theme.css`
- If installing to a local Obsidian vault, copy both `theme.css` and `manifest.json` and verify the installed theme matches repo source.

## Release Push Workflow

When the user asks for a new push or release push:

1. Bump `manifest.json` to the next appropriate version. Choose the version unless the user gives one; default to the next patch version.
2. Validate release inputs before any branch or GitHub action:
   - Do not run a local build unless the user explicitly asks to test, validate generated output, or fix a stale artifact.
   - Confirm root `theme.css` contains no `@import`, `!important`, or `:has(`.
   - Confirm root `manifest.json` exists, parses as JSON, and includes valid `name`, `version`, `minAppVersion`, and `author`.
   - Stop the release flow if root `theme.css` or `manifest.json` is missing, invalid, or fails non-build validation.
3. Create a release branch named exactly `release/x.x.x`, where `x.x.x` is the manifest version.
4. Push the branch to GitHub, create a PR into `main`, merge the PR, then watch the GitHub Action until it creates the release zip, attestation, tag, and GitHub release successfully.
5. Return local checkout to `main`, pull from `origin main`, and confirm the local repo is up to date.

Do not manually edit generated root `theme.css`. Do not build locally as part of release push unless that build is explicitly a test or stale-artifact fix.
