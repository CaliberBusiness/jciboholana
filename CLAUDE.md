# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build static export to /out
npm run start    # Serve production build
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** with `output: 'export'` for static site generation. The site deploys to GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`).

### basePath and Asset Paths

`next.config.mjs` sets a dynamic `basePath` from the `NEXT_PUBLIC_BASE_PATH` env variable (empty in dev, `/jciboholana` in production). All asset URLs must go through `src/lib/assetPath.js` — never hardcode `/images/...` paths. Use the `assetPath()` helper so they resolve correctly under the subdirectory on GitHub Pages.

### Content Management

All site content lives in `src/content/homeContent.js` (656 lines). It exports structured data objects for the hero, leadership, projects, programs, sister chapters, and more. Components consume this data as props rather than fetching remotely. When updating content (text, images, names), edit this file.

Project data for dynamic routes is managed in `src/lib/projects.js`, which feeds the `[slug]` page.

### SEO and Metadata

`src/lib/site.js` is the central SEO utility. It contains:
- Site configuration constants (name, description, origin candidates)
- `generateMetadata()` factory used in every page's `export const metadata`
- Structured data (JSON-LD) generators for Organization, WebPage, BreadcrumbList schemas

`src/components/StructuredData.jsx` injects the JSON-LD `<script>` tags. `src/app/robots.js` and `src/app/sitemap.js` generate those files dynamically at build time.

### Styling

Component-scoped CSS Modules (`.module.css` alongside each component). Global resets and typography are in `src/app/globals.css`. No CSS-in-JS or utility framework — use CSS Modules for all new styles.

## Brand Guidelines

Defined in `JCI_BoholanaKisses_Website_Directive.md`. Key colors:
- JCI Maroon: `#8C0000`
- Gold: `#C6A84B`
- Blue: `#003F7D`
- Pink: `#D4748A`

Magazine/editorial design language — storytelling-first layout with prominent imagery.
