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
