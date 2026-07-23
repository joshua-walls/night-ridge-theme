# Night Ridge CSS Source

`theme.css` is generated. Edit files in this `src/` tree, then run:

```bash
npm run build:css
```

`src/theme.css` preserves cascade order with imports. The folders group rules by the Obsidian surface they affect:

- `foundation/`: palette, shared semantic tokens, canonical light/dark variables
- `mode-dark/`: dark-only component exceptions
- `mode-light/`: light-only component exceptions
- `workspace/`: app chrome, tabs, command palette, settings, shell surfaces
- `navigation/`: file tree, folder depth, search, backlinks
- `frontmatter/`: properties and metadata rows
- `editor/`: Live Preview, source mode, inline title, cursor/selection behavior
- `content/`: reading view, headings, links, code, callouts, tables, tasks, tags
- `controls/`: forms, buttons, selects, dropdowns, checkboxes
- `integrations/`: Dataview, Forge status hooks, Mermaid
- `visualizations/`: graph and Canvas
- `mobile/`: mobile header, nav, touch geometry

Editing rule:

```text
Override Obsidian. Do not override Night Ridge earlier in its own source.
```

`npm run validate` builds the generated root `theme.css`, checks banned selectors/patterns, and runs `scripts/audit-css-cascade.mjs` to fail exact same-selector/property overrides in source order.

Some larger files still contain mixed surfaces, especially `workspace/shared-ui-polish.css`, `content/callouts-code-tasks.css`, and `mode-dark/surface-signals.css`. Split those further only with an Obsidian visual check because they still encode broad final surface polish.
