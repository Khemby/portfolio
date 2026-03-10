# Retro Futurism Graphic System — Design Spec
**Date:** 2026-03-10
**Status:** Approved

## Goal

Add a consistent blueprint+HUD graphic decoration system across the entire portfolio. No layout changes — purely decorative elements that reinforce the retro futurism aesthetic established in the UI refactor.

---

## The Four Decoration Elements

### 1. Section Numbering
Every section label becomes `0N // SECTION NAME`. The `//` separator and number are muted (`#383838` or `#737373`), creating a technical document / HUD feel.

| Section | New Label |
|---|---|
| FeaturedProjects | `01 // FEATURED PROJECTS` |
| About (left col) | `02 // ABOUT` |
| Experience (right col) | `02 // EXPERIENCE` |
| Skills | `03 // SKILLS` |
| Projects | `04 // ALL PROJECTS` |
| Contact | `05 // CONTACT` |

### 2. Corner Brackets
A reusable `<CornerBrackets>` component renders four L-shaped marks at the corners of a container. The container must be `position: relative`. The brackets are `position: absolute`.

**Props:**
- `color` — default `#383838`
- `size` — default `12` (px, controls arm length)
- `thickness` — default `1` (px)

**Applied to:**
- Hero content block
- FeaturedProjects bento grid (outer border)
- AboutExperience highlight card grid (the 2×2 grid)

### 3. Coordinate Micro-Labels
Tiny `9px` monospace labels positioned in the outer corners of the hero section:
- Top-left: `X:000 // Y:000` — color `#383838`
- Bottom-right: `V.2026` — color `#383838`

Purely decorative. Positioned `absolute` relative to the hero `<section>` element.

### 4. HUD Status Tags

**Nav:** Append `// PORTFOLIO` after "Kaitlyn Hemby" in the logo area. Color `#383838`, `fontSize: 10`, `letterSpacing: 0.12em`.

**Hero status badge:** Change from:
```
● OPEN TO OPPORTUNITIES
```
to:
```
SYS:01 // OPEN TO OPPORTUNITIES
```
`SYS:01 //` in `#383838`, then the existing text in `#737373`.

**Contact section:** Add a single line below the h2, above the CTA buttons:
```
INITIATING CONTACT SEQUENCE //
```
`fontSize: 9`, `letterSpacing: 0.2em`, `color: #383838`, `textTransform: uppercase`.

---

## Implementation Plan

### New File
- `app/components/ui/CornerBrackets.tsx` — reusable corner bracket component

### Modified Files
- `app/components/Nav.tsx` — add `// PORTFOLIO` tag
- `app/components/Hero.tsx` — corner brackets on content block, coordinate labels on section, updated status badge
- `app/components/FeaturedProjects.tsx` — section number, corner brackets on bento grid
- `app/components/AboutExperience.tsx` — section numbers, corner brackets on highlight grid
- `app/components/Skills.tsx` — section number
- `app/components/Projects.tsx` — section number
- `app/components/Contact.tsx` — section number, contact sequence label

### Constraints
- No layout changes
- No new dependencies
- All decorative elements use `position: absolute` inside existing `position: relative` containers
- Colors: `#383838` (barely visible) or `#737373` (muted) — never bright, never competing with content
