# Build Brief — Oluwatosin Dada · Editorial Portfolio

## Role
Act as a senior creative developer and editorial designer. Ship a production-grade,
award-calibre single-page portfolio in the existing Next.js 16 (App Router) + Tailwind v4
project, animated with GSAP (ScrollTrigger, ScrollSmoother, SplitText).

## Subject
Oluwatosin Dada — HR professional, Lagos, Nigeria. People Management Executive at Xown
Solutions (Sep 2025 – present); previously HR/Admin Officer at Chemical and Allied Products
PLC (Jul 2024 – Sep 2025). Positioning line: **"I build structure where there is ambiguity."**
Target roles: HR Business Partnering, People Operations, HR Strategy, HR Governance,
HR Transformation, HR Management.

All copy comes from the supplied portfolio PDF and resume. Write in the first person.
Never invent metrics. Where the two sources disagree, use the more conservative figure.

## Audience & goal
Recruiters, hiring managers and HR leaders scanning on phone or desktop. Within 10 seconds
they should know who Oluwatosin is, the work and the proof (numbers). Within 2 minutes they
should have read the case studies and found a way to make contact.

## Visual system
- **Palette (fixed):** background `#F5F7F4`, surface `#E1E8DF`, ink `#1E2B26`, accent
  `#3F7D5C`. Derived tones only: a deep forest (`#16201C`) for dark chapters, plus a
  pale sage for text on dark backgrounds. The portraits are shot on deep green, so dark
  sections should blend into the photography.
- **Type:** Fraunces (variable serif with optical size and italics) for oversized editorial
  display; Geist for body; Geist Mono for small-caps labels, indices and metadata.
  Display sizes use fluid `clamp()` up to ~16vw. Tight leading, negative tracking, and
  italic accents on key words.
- **Layout:** a 12-column magazine grid, numbered chapters ("01 / Profile"), hairline rules,
  generous whitespace, film grain overlay, and asymmetric image placement.

## Motion (GSAP)
1. Preloader: a 0→100 counter and a name wipe, then a curtain lifts into the hero. Under 2s.
2. Smooth scrolling with ScrollSmoother. `data-speed` parallax on images and decorative type.
   Native scrolling on touch devices.
3. SplitText reveals: masked line and character rises on headings, and word-by-word opacity
   scrubbing on the manifesto.
4. Clip-path image reveals with inner-image counter-scale (parallax inside the mask).
5. A velocity-reactive marquee of capabilities.
6. Counters that tick up when they come into view.
7. A pinned horizontal case-study rail on desktop that falls back to a vertical stack on mobile.
8. Strike-through price animation for the negotiated savings.
9. A magnetic CTA, a hide-on-scroll nav and a full-screen mobile menu.
10. `prefers-reduced-motion`: smoothing off, content shown immediately, only opacity fades.

## Sections
Hero → Capability marquee → Manifesto → Numbers → Capability map → Career chapters
(CAP Plc, Xown) and earlier path → Case studies → "People's Champion" quote with portrait →
ISO certification feature → Cost negotiation ledger → Systems toolkit → Advisory →
Growth (CIPM, SPHRi, MBA, learning, education, certifications) → Contact / footer.

## SEO (world-class)
- Server-render all text so crawlers see it without running JS.
- Use one `h1` and a semantic heading hierarchy, landmarks and descriptive alt text.
- Metadata: title template, description, keywords, canonical, `metadataBase` from
  `NEXT_PUBLIC_SITE_URL`, Open Graph `profile`, Twitter large card, robots directives,
  theme colour.
- JSON-LD `@graph`: `ProfilePage` + `Person` (jobTitle, worksFor, alumniOf, knowsAbout,
  sameAs, memberOf) + `WebSite`.
- `sitemap.ts`, `robots.ts`, `manifest.ts`, a generated 1200×630 `opengraph-image`, and
  `apple-icon`.
- Optimised `next/image` with an eager hero. Fonts via `next/font`.

## Brand mark
An "OD" monogram in Fraunces italic on forest green, used for `favicon.ico` (16/32/48),
`icon.svg` and `apple-icon.png`. It replaces the Next.js default.

## Quality bar
- Mobile-first, with no horizontal overflow at 360px.
- `npm run build` passes with zero type errors.
- Accessibility: AA contrast, keyboard focus states, skip link.
- Iterate: build → review against this brief → fix → rebuild.
