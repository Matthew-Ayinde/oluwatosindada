# Oluwatosin Dada — Portfolio

An editorial single-page portfolio built with Next.js 16 (App Router), Tailwind CSS v4 and GSAP
(ScrollSmoother, ScrollTrigger, SplitText). The design spec lives in [BRIEF.md](BRIEF.md).

## Develop

```bash
npm install
npm run dev
```

## Deploy

Set the production URL so canonical links, the sitemap, robots.txt and Open Graph tags point at
the right domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If this is not set, the site falls back to `https://oluwatosindada.vercel.app`.

## Where things live

| Path | Purpose |
| --- | --- |
| `lib/content.ts` | All copy (sourced from the CV and portfolio). Edit text here. |
| `lib/site.ts` | Site URL, SEO title, description, keywords, nav. |
| `components/sections/*` | Server-rendered sections, which keep every word crawlable. |
| `components/Motion.tsx` | A single GSAP orchestrator driven by `data-*` hooks in the markup. |
| `app/opengraph-image.tsx`, `lib/og.tsx` | Generated 1200×630 social card. |
| `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png` | "OD" monogram icons. |
| `assets/fonts` | Fraunces files used only by the OG image renderer. |

### Motion hooks

`data-split` (line reveal), `data-split="chars"`, `data-words` (scrubbed reading),
`data-reveal`, `data-stagger`, `data-rule`, `data-img` + `data-img-inner` (curtain reveal and
parallax), `data-count`, `data-marquee`, `data-drift`, `data-speed` (ScrollSmoother parallax),
`data-hscroll` (pinned horizontal rail, desktop only), `data-pin`, `data-magnetic`.

Users with `prefers-reduced-motion` get native scrolling and static content.
