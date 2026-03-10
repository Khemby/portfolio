# Portfolio UI Refactor — Design Spec
**Date:** 2026-03-10
**Status:** Approved

## Goal

Complete UI/UX overhaul of the portfolio. All existing content stays — only the visual design and layout change. Top priority: users see featured projects immediately on landing.

---

## Decisions Made

| Question | Decision |
|---|---|
| Entry layout | Hero + featured projects immediately below (no scroll required) |
| Hero aesthetic | Animated particle field (MinimalHero from ui_refactor.md) |
| Project cards | Editorial bento grid: 1 large + 2 smaller |
| Page flow | About and Experience merged into one two-column section |

---

## Visual System

**Theme:** Retro futurism. Majority black/white with per-project accent color pops.

**Colors:**
- Background: `#0a0a0a`
- Foreground: `#fafafa`
- Border: `#383838`
- Muted: `#737373`
- Per-project accents: teal `#14b8a6`, purple `#9b5cf6`, blue `#6284f7`, pink `#ec4899`, orange `#f97316`, green `#10b981`

**Typography:** Geist Mono for all text — headings, body, labels, tags.

**Shape:** 0rem border-radius everywhere. Sharp corners on all elements.

**Remove:** Gradient text, colored orbs, purple-pink gradients, frosted glass effects, box shadows.

**Keep:** Subtle grid background texture (`globals.css` `.grid-bg`).

---

## Section Designs

### Navigation

Fixed top bar. Solid `#0a0a0a` background with `1px solid #383838` bottom border (no blur/frosted glass).

```
[KH]  Kaitlyn Hemby          ABOUT · PROJECTS · EXPERIENCE · SKILLS    [HIRE ME]
```

- `KH` badge: white square, black text (no gradient)
- Nav links: monospace uppercase, `#737373` default → `#fafafa` hover
- "Hire Me": solid white background, black text, sharp corners

---

### Hero

Full-screen canvas. MinimalHero particle animation (ui_refactor.md):
- Falling rectangle particles (0.6px × 1–3px, white, low opacity)
- Subtle grid background
- Horizontal + vertical accent shimmer lines

Content centered:
- Status badge: `● OPEN TO OPPORTUNITIES`
- Name: `Kaitlyn Hemby` (large)
- Tagline: `SOFTWARE ENGINEER · TECHNICAL LEADER · AI BUILDER`
- Bio: one sentence
- CTAs: `[GET IN TOUCH]` (solid white) + `[LINKEDIN ↗]` + `[GITHUB ↗]` (outlined)
- Stats row: `5+ YEARS EXP | 2x CO-FOUNDER | AI NATIVE` with `|` separators (no stat cards)

---

### Featured Projects (bento grid)

Directly below hero. No scrolling required on desktop.

Section label: `FEATURED PROJECTS` — small monospace uppercase.

Bento layout:
```
┌─────────────────────┬──────────┐
│                     │          │
│   LifeSpark Labs    │ VortexeAI│
│   (large card)      │          │
│                     ├──────────┤
│                     │  SPXFit  │
└─────────────────────┴──────────┘
```

Card contents:
- Accent-colored left border
- Gradient preview area (project color, low opacity)
- Category label (monospace uppercase, accent color)
- Project name, tagline, role
- Tech tags (outlined pill badges, `#383838` border)
- "View Project →" link

**EvervaultCard hover effect** (ui_refactor.md): random character shimmer over the preview area on mouse-over. Requires `framer-motion`.

"View All Projects →" text link below grid.

---

### About + Experience (merged, two-column)

Single section. Two columns side by side.

**Left column — About:**
- Headshot: square crop, sharp corners
- Heading: "Engineering platforms that scale and ship."
- Bio paragraph
- 4 highlight cards (AI, FS, TL, PM): flat bordered boxes, colored badge, no shadows

**Right column — Experience:**
- Vertical timeline
- Each entry: colored left border, company, role, date range, location, bullet points, tech tags
- All 5 entries: LifeSpark Labs, VortexeAI, AIREAL, Overwhelming Studios, SAGE Collectibles

---

### Skills

8 category cards in a grid. Each card:
- Colored top border accent
- Category name
- Skill tags as flat outlined pill badges
- Card background: `#191919`, border: `#383838`, no gradients

Leadership & Strategy as a separate card below.

---

### All Projects

Full project grid with category filter. Restyled to match new aesthetic:
- Filter buttons: monospace text tabs, underline on active (no pill shapes)
- Project cards: sharp, flat, match bento grid style

---

### Contact + Footer

```
Let's build something remarkable together.

[EMAIL ME]   [LINKEDIN ↗]

─────────────────────────────────────
[KH]  Kaitlyn Hemby          LinkedIn · kaitlynhemby.com
```

No gradient. Sharp horizontal rule separator for footer.

---

## Dependencies to Install

- `framer-motion` — required for EvervaultCard hover effect

## Files to Modify

- `app/globals.css` — replace color tokens, remove gradient/orb classes
- `app/components/Nav.tsx` — new nav style
- `app/components/Hero.tsx` — replace with MinimalHero particle canvas + new content layout
- `app/components/Projects.tsx` — new featured bento grid + restyled full project grid
- `app/components/About.tsx` — merge with Experience, two-column layout
- `app/components/Experience.tsx` — integrate into About component
- `app/components/Skills.tsx` — restyle cards
- `app/components/Contact.tsx` — restyle
- `app/page.tsx` — update section order (remove separate Experience section)

## Files to Create

- `app/components/FeaturedProjects.tsx` — bento grid with EvervaultCard
- `app/components/EvervaultCard.tsx` — interactive hover card (from ui_refactor.md)
- `app/lib/utils.ts` — `cn()` utility (required by EvervaultCard)
