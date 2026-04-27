# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project purpose

An organic chemistry mechanism visualizer built with Next.js. The primary focus is ochem reaction mechanisms and interactive visualization. A dedicated **Biology** tab is planned as a future addition without displacing the core ochem flow.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run lint     # Run ESLint (next/core-web-vitals)
npm start        # Start production server
```

No test framework is configured yet.

## Architecture

**Stack:** Next.js 15.3 · React 19 · TypeScript (strict) · Tailwind CSS

The project is in its bootstrap phase — configuration is in place but no source files exist yet under `src/`. When building out the app, use the **App Router** (`src/app/`) based on the Tailwind content paths; components live in `src/components/`.

**Path alias:** `@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Design system

All semantic colors are defined via CSS variables (to be set in `globals.css`) and consumed via Tailwind utility classes:

| Token | Tailwind class | Purpose |
|---|---|---|
| `--bg` | `bg-bg` | Page background |
| `--surface` | `bg-surface` | Card / panel background |
| `--border` | `border-border` | Borders and dividers |
| `--text` | `text-text` | Primary text |
| `--text-muted` | `text-text-muted` | Secondary text |
| `--subtle` | `bg-subtle` | Subtle fills |

Fixed color tokens: `accent` (`#7c6cfc`), `accent-soft` (`#a89cff`), `success`, `warning`, `danger`, `muted`.

**Typography:** `font-sans` → DM Sans, `font-mono` → IBM Plex Mono.

**Animation utilities:** `animate-fade-in`, `animate-slide-up`, `animate-arrow-draw` — the arrow-draw animation operates on SVG `strokeDashoffset` and is intended for drawing reaction arrow SVGs.
