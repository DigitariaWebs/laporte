# Project Context for Claude Code

This file gives Claude Code high-signal context and guardrails for working in this repo. Keep it short, update when conventions change.

## Overview
Resto clone using Next.js App Router with Tailwind CSS and Framer Motion. Goal: reproduce a restaurant landing with a fixed left sidebar, bold poster sections, newsletter, and footer. French UI by default.

## Tech Stack
- Next.js 15 (App Router) + TypeScript (strict in tsconfig; build ignores allowed via next.config)
- Tailwind CSS v4
- Framer Motion for animations
- Prettier + prettier-plugin-tailwindcss

## Structure
- `src/app/` — App Router pages; `layout.tsx` includes fixed sidebar layout
- `src/components/` — UI components (Sidebar, HeroBanner, SectionStrip, PromoDoubles, ActionTiles, Newsletter, Footer, Partners, Contact, Centerpiece)
- `src/lib/` and `src/config/` — constants and asset paths
- `public/` — static assets and PDFs

## Commands
```bash
npm i
npm run dev      # start dev server
npm run build    # build (eslint/ts errors ignored per next.config.ts)
npm start        # run production server
npm run format   # prettier with tailwind plugin
npm run generate:images  # generate placeholder images (optional)
```

## Conventions
- Styling with Tailwind only (no UI kits). Keep display font `Bebas Neue` and body `Inter`.
- Colors:
  - brand.red `#B5121B`, brand.black `#0B0B0B`, brand.offwhite `#F3F1ED`, brand.yellow `#FFD400`
- Sidebar width: 200px on md+; hidden on mobile.
- Accessibility: use semantic landmarks (`nav`, `main`), visible focus rings, alt text.
- Images: always under `/public/images` and referenced via `next/image`.

## Pages/Sections Order
1. TopCtas (red buttons)
2. HeroBanner (carousel, swipe animation, no arrows/dots)
3. SectionStrip (red bar) — text may change
4. Centerpiece (background cover + centered image) [optional, keep simple]
5. PromoDoubles (2 cards, full-bleed images)
6. Partners
7. ActionTiles
8. Newsletter
9. Contact (form over decorative pizza bottom-right)
10. Footer

## Asset routing
- Centralized in `src/config/assets.ts` (logos, hero slides, PDFs, section images).
- PDFs open viewer routes:
  - `/pdf/menu` → embeds `/menuresteau.pdf`
  - `/pdf/menu-enfants` → embeds `/Menuenfant.pdf`

## PR/Change Guidance for Claude
- Prefer small, focused edits; match existing code style.
- Keep TS types; when unsure, default to explicit ReactElement return types.
- Ensure components are client/server appropriately. Carousel and interactive sections are client.
- Don’t introduce external UI libraries.
- Maintain a11y (labels, aria, focus-visible).

## Out-of-Scope
- Authentication, database, or backend APIs.
- Analytics/telemetry.

## Known Trade-offs
- `next.config.ts` ignores TS/ESLint errors on build to simplify deploys.

## To‑Do (if needed)
- Replace placeholder images with final assets.
- Hook contact form to an email service (Resend, Formspree) if required.


