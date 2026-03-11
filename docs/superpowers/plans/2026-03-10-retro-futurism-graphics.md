# Retro Futurism Graphic System Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a consistent blueprint+HUD decoration system across the portfolio — section numbering, corner brackets, coordinate micro-labels, and HUD status tags — without changing any layout or content.

**Architecture:** Purely decorative overlays using `position: absolute` inside existing `position: relative` containers. One new reusable component (`CornerBrackets`), seven modified components. No new dependencies.

**Tech Stack:** React/Next.js, TypeScript, inline styles (no Tailwind additions needed)

---

## Chunk 1: New Component + Nav + Hero

### Task 1: Create CornerBrackets component

**Files:**
- Create: `app/components/ui/CornerBrackets.tsx`

No testable logic — verify by importing in a component and confirming no TypeScript errors during `next build`.

- [ ] **Step 1: Create the file**

```tsx
type CornerBracketsProps = {
  color?: string;
  size?: number;
  thickness?: number;
};

export default function CornerBrackets({
  color = "#383838",
  size = 12,
  thickness = 1,
}: CornerBracketsProps) {
  const arm = size;
  const t = thickness;
  const corners = [
    { top: 0, left: 0, borderTop: `${t}px solid ${color}`, borderLeft: `${t}px solid ${color}` },
    { top: 0, right: 0, borderTop: `${t}px solid ${color}`, borderRight: `${t}px solid ${color}` },
    { bottom: 0, left: 0, borderBottom: `${t}px solid ${color}`, borderLeft: `${t}px solid ${color}` },
    { bottom: 0, right: 0, borderBottom: `${t}px solid ${color}`, borderRight: `${t}px solid ${color}` },
  ] as const;

  return (
    <>
      {corners.map((style, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: arm,
            height: arm,
            pointerEvents: "none",
            zIndex: 20,
            ...style,
          }}
        />
      ))}
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/ui/CornerBrackets.tsx
git commit -m "feat: add CornerBrackets reusable component"
```

---

### Task 2: Update Nav — add // PORTFOLIO HUD tag

**Files:**
- Modify: `app/components/Nav.tsx`

- [ ] **Step 1: Open Nav.tsx and locate the "Kaitlyn Hemby" span (lines 45–55)**

Current code:
```tsx
<span
  style={{
    fontSize: 13,
    fontWeight: 600,
    color: "#fafafa",
    letterSpacing: "0.04em",
    fontFamily: "var(--font-geist-mono)",
  }}
>
  Kaitlyn Hemby
</span>
```

- [ ] **Step 2: Append the `// PORTFOLIO` tag after the span, inside the same logo flex container**

Replace the logo `<div>` block (lines 26–56) with:
```tsx
<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
  <div
    style={{
      width: 28,
      height: 28,
      background: "#fafafa",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700,
      color: "#0a0a0a",
      fontFamily: "var(--font-geist-mono)",
      flexShrink: 0,
      letterSpacing: "0.05em",
    }}
  >
    KH
  </div>
  <span
    style={{
      fontSize: 13,
      fontWeight: 600,
      color: "#fafafa",
      letterSpacing: "0.04em",
      fontFamily: "var(--font-geist-mono)",
    }}
  >
    Kaitlyn Hemby
  </span>
  <span
    style={{
      fontSize: 10,
      color: "#383838",
      letterSpacing: "0.12em",
      fontFamily: "var(--font-geist-mono)",
    }}
  >
    // PORTFOLIO
  </span>
</div>
```

- [ ] **Step 3: Commit**

```bash
git add app/components/Nav.tsx
git commit -m "feat: add // PORTFOLIO HUD tag to nav logo"
```

---

### Task 3: Update Hero — corner brackets, coordinate labels, status badge

**Files:**
- Modify: `app/components/Hero.tsx`

Three sub-changes:
1. Status badge: `SYS:01 // OPEN TO OPPORTUNITIES` format
2. Corner brackets on hero content block
3. Coordinate micro-labels on the hero `<section>`

- [ ] **Step 1: Add CornerBrackets import at top of file**

After `import { useEffect, useRef } from "react";`, add:
```tsx
import CornerBrackets from "./ui/CornerBrackets";
```

- [ ] **Step 2: Update the status badge (lines 153–170)**

Replace:
```tsx
{/* Status badge */}
<div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid #383838",
    padding: "4px 12px",
    marginBottom: 32,
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#737373",
  }}
>
  <span className="pulse" />
  Open to Opportunities
</div>
```

With:
```tsx
{/* Status badge */}
<div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "1px solid #383838",
    padding: "4px 12px",
    marginBottom: 32,
    fontSize: 10,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
  }}
>
  <span className="pulse" />
  <span style={{ color: "#383838" }}>SYS:01 //</span>
  <span style={{ color: "#737373" }}>OPEN TO OPPORTUNITIES</span>
</div>
```

- [ ] **Step 3: Add CornerBrackets inside the hero content `<div>` (lines 144–152)**

The content block starts with:
```tsx
{/* Hero content */}
<div
  style={{
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    padding: "0 24px",
    maxWidth: 800,
  }}
>
```

Add `<CornerBrackets size={16} />` as the first child inside that div:
```tsx
{/* Hero content */}
<div
  style={{
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    padding: "0 24px",
    maxWidth: 800,
  }}
>
  <CornerBrackets size={16} />
  {/* Status badge */}
  ...
```

- [ ] **Step 4: Add coordinate micro-labels to the hero `<section>`**

The `<section>` element already has `position: "relative"`. Add two absolute-positioned labels just before the closing `</section>` tag (after the hero content div closes):

```tsx
      </div>

      {/* Coordinate labels */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 16,
          fontSize: 9,
          color: "#383838",
          letterSpacing: "0.1em",
          fontFamily: "var(--font-geist-mono)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        X:000 // Y:000
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 16,
          fontSize: 9,
          color: "#383838",
          letterSpacing: "0.1em",
          fontFamily: "var(--font-geist-mono)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      >
        V.2026
      </div>
    </section>
```

- [ ] **Step 5: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: add corner brackets, coordinate labels, and SYS:01 status badge to hero"
```

---

## Chunk 2: Section Labels + Remaining Components

### Task 4: Update FeaturedProjects — section number + corner brackets on grid

**Files:**
- Modify: `app/components/FeaturedProjects.tsx`

- [ ] **Step 1: Add CornerBrackets import**

Add at top of file:
```tsx
import CornerBrackets from "./ui/CornerBrackets";
```

- [ ] **Step 2: Update the section label (line 14)**

Replace:
```tsx
<div className="section-label">Featured Projects</div>
```

With:
```tsx
<div className="section-label">
  <span style={{ color: "#383838" }}>01 //</span> FEATURED PROJECTS
</div>
```

- [ ] **Step 3: Add CornerBrackets to the bento grid container**

The bento grid div (lines 16–25) currently has no `position: relative`. Add it and `<CornerBrackets />` as the first child:

Replace:
```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gridTemplateRows: "auto",
    gap: 1,
    background: "#383838",
    border: "1px solid #383838",
  }}
>
```

With:
```tsx
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gridTemplateRows: "auto",
    gap: 1,
    background: "#383838",
    border: "1px solid #383838",
    position: "relative",
  }}
>
  <CornerBrackets />
```

- [ ] **Step 4: Commit**

```bash
git add app/components/FeaturedProjects.tsx
git commit -m "feat: add section number and corner brackets to FeaturedProjects"
```

---

### Task 5: Update AboutExperience — section numbers + corner brackets on highlight grid

**Files:**
- Modify: `app/components/AboutExperience.tsx`

- [ ] **Step 1: Add CornerBrackets import**

Add at top of file:
```tsx
import CornerBrackets from "./ui/CornerBrackets";
```

- [ ] **Step 2: Update the About section label (line 118)**

Replace:
```tsx
<div className="section-label">About</div>
```

With:
```tsx
<div className="section-label">
  <span style={{ color: "#383838" }}>02 //</span> ABOUT
</div>
```

- [ ] **Step 3: Update the Experience section label (line 186)**

Replace:
```tsx
<div className="section-label">Experience</div>
```

With:
```tsx
<div className="section-label">
  <span style={{ color: "#383838" }}>02 //</span> EXPERIENCE
</div>
```

- [ ] **Step 4: Add CornerBrackets to the highlight card grid**

The highlight grid div (line 151) already has `display: grid`. Add `position: "relative"` and `<CornerBrackets />` as first child:

Replace:
```tsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#383838", border: "1px solid #383838" }}>
  {highlights.map((h) => (
```

With:
```tsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#383838", border: "1px solid #383838", position: "relative" }}>
  <CornerBrackets />
  {highlights.map((h) => (
```

- [ ] **Step 5: Commit**

```bash
git add app/components/AboutExperience.tsx
git commit -m "feat: add section numbers and corner brackets to AboutExperience"
```

---

### Task 6: Update Skills, Projects, Contact — section numbers + contact sequence label

**Files:**
- Modify: `app/components/Skills.tsx`
- Modify: `app/components/Projects.tsx`
- Modify: `app/components/Contact.tsx`

- [ ] **Step 1: Update Skills section label (Skills.tsx line 27)**

Replace:
```tsx
<div className="section-label">Skills</div>
```

With:
```tsx
<div className="section-label">
  <span style={{ color: "#383838" }}>03 //</span> SKILLS
</div>
```

- [ ] **Step 2: Update Projects section label (Projects.tsx line 35)**

Replace:
```tsx
<div className="section-label">All Projects</div>
```

With:
```tsx
<div className="section-label">
  <span style={{ color: "#383838" }}>04 //</span> ALL PROJECTS
</div>
```

- [ ] **Step 3: Update Contact section label and add contact sequence label (Contact.tsx)**

Replace:
```tsx
<div className="section-label" style={{ textAlign: "center" }}>Contact</div>
```

With:
```tsx
<div className="section-label" style={{ textAlign: "center" }}>
  <span style={{ color: "#383838" }}>05 //</span> CONTACT
</div>
```

Then add the contact sequence label between the `<h2>` closing tag and the `<p>` tag. After `</h2>` (line 18), insert:
```tsx
<div
  style={{
    fontSize: 9,
    letterSpacing: "0.2em",
    color: "#383838",
    textTransform: "uppercase",
    marginBottom: 16,
    marginTop: -8,
  }}
>
  INITIATING CONTACT SEQUENCE //
</div>
```

The section should now read:
```tsx
<div className="section-label" style={{ textAlign: "center" }}>
  <span style={{ color: "#383838" }}>05 //</span> CONTACT
</div>

<h2
  style={{
    fontSize: "clamp(24px, 4vw, 40px)",
    fontWeight: 700,
    color: "#fafafa",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    marginBottom: 16,
  }}
>
  Let&apos;s build something remarkable together.
</h2>

<div
  style={{
    fontSize: 9,
    letterSpacing: "0.2em",
    color: "#383838",
    textTransform: "uppercase",
    marginBottom: 16,
    marginTop: -8,
  }}
>
  INITIATING CONTACT SEQUENCE //
</div>

<p style={{ fontSize: 13, color: "#737373", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
```

- [ ] **Step 4: Commit**

```bash
git add app/components/Skills.tsx app/components/Projects.tsx app/components/Contact.tsx
git commit -m "feat: add section numbers and contact sequence label to Skills, Projects, Contact"
```

---

### Task 7: Verify build passes

- [ ] **Step 1: Run build**

```bash
cd /c/Users/KaitlynHemby/Documents/portfolio_project && npm run build
```

Expected: `✓ Compiled successfully` with zero errors and zero warnings.

- [ ] **Step 2: If errors, fix and re-run**

Common issues:
- Missing import for `CornerBrackets` — add `import CornerBrackets from "./ui/CornerBrackets";` to the file
- TypeScript error on `style` spread — ensure `as const` is used in the corners array in `CornerBrackets.tsx`

- [ ] **Step 3: Commit if any fixes were needed**

```bash
git add -p
git commit -m "fix: resolve build errors in retro futurism graphics"
```
