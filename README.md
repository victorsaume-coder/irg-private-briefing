# IRG Private Briefing

A private introduction to Miami pre-construction from International Realty Group.

## Development

Requires Node.js 22.12+ (Node 24 recommended). The existing AI Studio / TanStack Start / Vite integration is retained.

```sh
npm install
npm run dev
```

## Verification

```sh
npx tsc --noEmit
npm run build
```

The luxury redesign is implemented in `src/components/irg/PrivateBriefing.tsx` and `src/briefing.css`. The root route retains the existing router and hosting configuration. All presentation styles are scoped to `.private-briefing` and content renders visibly on the server without scroll-reveal dependencies.

## Content and contact

- The ownership tabs support mouse, touch, and keyboard selection.
- Project inquiries retain the selected project in the WhatsApp message.
- The mobile menu supports dismissal by navigation, Escape, or clicking outside.
- FAQ answers use native expandable disclosures.
- Direct WhatsApp contact is Luis Victor Villalobos, +1 786 409 9212, verified against his public IRG page at https://luisvictor.internationalrg.com/ on November 24, 2026. The page labels this destination explicitly.
- Project availability, pricing, return projections, and delivery dates are not fabricated.
- The collection is a selected set of four developments, rather than an inventory list. Add further projects only with verified content and their own official imagery.

## Visual assets

Local WebP assets are resized and compressed versions of the original briefing imagery and official project images. Provenance is recorded in `public/images/sources.json`. Project imagery is labeled as conceptual renderings. Downloaded originals are excluded from Git.

Sources: Kempinski's corporate residence page, Delano's developer website, Villa Miami, and the official Mandarin Oriental Miami residences website. The Delano location is Downtown Miami.

Visual checks covered 320 px, 390 px, 768 px, 1280 px and 1440 px layouts, navigation, ownership tabs, FAQs, project selection, anchor targets and image loading. Desktop and mobile captures are in `docs/`.

## Git history

This repository is connected to AI Studio. Preserve published history. Use forward commits and never force-push, rebase, amend or squash already pushed commits.
