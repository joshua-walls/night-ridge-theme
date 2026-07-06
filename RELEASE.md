# Release Notes

This file is for maintainers and release prep.

## Changelog

### 0.1.8

- Refined status bar positioning to preserve Obsidian's floating behavior in Night Ridge dark mode.
- Added contained dark and light status bar beacon treatments without `!important` or `:has()` selectors.
- Kept the Cortex install, local dist folder, and release zip aligned with source.

### 0.1.7

- Aligned Mermaid theme styling with Obsidian's documented Mermaid font variables.
- Refactored theme foundations toward official Obsidian CSS variables first for fonts, links, tags, blockquotes, tables, properties, callouts, graph, canvas, tabs, ribbon, status bar, modals, inputs, and controls.
- Narrowed Mermaid fallback selectors to rendered `.mermaid` content instead of broad SVG selectors.
- Removed redundant `body[data-theme]` fallbacks in favor of Obsidian's `.theme-dark` and `.theme-light` classes.
- Kept CSS lint clean of `!important` and `:has()` selectors.

### 0.1.6

- Refined dark-mode heading, code block, dashboard, table, callout, and sidebar contrast.
- Adjusted light-mode shell, card, table, callout, and control surfaces for a cooler Night Ridge paper feel.
- Updated the visual check screenshot for the current theme state.

### 0.1.5

- Removed Obsidian CSS lint warnings for unsupported `text-decoration`, `!important`, and broad `:has()` selectors.
- Refined Mermaid diagrams across dark and light mode, including readable node text, themed outlines, edge labels, and mobile-safe contrast.
- Kept graph, Live Preview, file path, cursor, tables, and code block styling aligned with the Night Ridge palette.

### 0.1.4

- Released light-mode parity for Night Ridge command-center styling.
- Added dark and light support for inline title beacons, property rhythm, callout hierarchy, and graph tuning.
- Refined Forge Health dashboard status colors where Forge exposes `data-status`.
- Improved Dataview empty/error state language, search result scanner ticks, and table command-grid styling.
- Reduced Live Preview edit-mode callout gutters while preserving rendered callout rails.

### 0.1.2

- Added Forge Health status styling for dashboard sections, headers, pills, and top-level status title support.
- Added semantic status mapping: pine for healthy states, copper for warning states, ember for critical states, and slate for muted/exempt states.
- Added graph color tuning for quieter links, pine nodes, copper warm/tag accents, ember unresolved/problem nodes, slate attachments, and seafoam focus.
- Added property panel and chip accents, including an eight-step accent rhythm.

### 0.1.1

- Added Night Ridge command-center styling refinements.
- Added H1 beacon treatment, H2 underline treatment, active note edge, folder depth color rotation, and folder rail radar.
- Added focused polish for callouts, Dataview, tables, search results, and mobile navigation.

### 0.1.0

- Forked the current Trailmark theme into the separate Night Ridge theme directory.
- Reset `manifest.json` to `0.1.0`.
- Reworked theme colors to the Night Ridge 3.1 baseline and accent order: Pine, Copper, Lichen, Ember, Slate, and Seafoam.
