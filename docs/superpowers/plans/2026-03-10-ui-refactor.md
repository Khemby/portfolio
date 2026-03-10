# Portfolio UI Refactor Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete visual overhaul of the portfolio — retro futurism aesthetic, particle hero, bento featured projects grid, merged two-column About+Experience — without changing any content.

**Architecture:** Each component is rewritten in-place using inline styles + Tailwind classes, following the dark theme tokens from `theme.md`. Two new components are created (`EvervaultCard`, `FeaturedProjects`). The `About` and `Experience` sections are merged into a single `AboutExperience` component. Page order changes to: Nav → Hero → FeaturedProjects → AboutExperience → Skills → Projects → Contact.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Geist Mono font, framer-motion (new install)

---

## Chunk 1: Foundation — CSS Tokens, Utilities, Dependencies

### Task 1: Install framer-motion

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install the package**

  Run from `portfolio_project/`:
  ```bash
  npm install framer-motion
  ```
  Expected: `added N packages` with no errors.

- [ ] **Step 2: Verify build still passes**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

  ```bash
  git add package.json package-lock.json
  git commit -m "feat: install framer-motion for EvervaultCard"
  ```

---

### Task 2: Create `cn()` utility

**Files:**
- Create: `app/lib/utils.ts`

- [ ] **Step 1: Install clsx and tailwind-merge first**

  ```bash
  npm install clsx tailwind-merge
  ```
  Expected: packages installed, no errors.

- [ ] **Step 2: Create the file**

  Create `app/lib/utils.ts`:
  ```ts
  import { type ClassValue, clsx } from "clsx";
  import { twMerge } from "tailwind-merge";

  export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }
  ```

- [ ] **Step 3: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 4: Commit**

  ```bash
  git add app/lib/utils.ts package.json package-lock.json
  git commit -m "feat: add cn() utility, install clsx and tailwind-merge"
  ```

---

### Task 3: Replace CSS design tokens in globals.css

**Files:**
- Modify: `app/globals.css`

The current `globals.css` uses a custom dark theme. Replace it entirely with the retro futurism tokens from `theme.md`, keeping only structural classes that are still needed.

- [ ] **Step 1: Replace globals.css**

  Replace the full contents of `app/globals.css` with:

  ```css
  @import "tailwindcss";

  :root {
    --card: #ffffff;
    --ring: #a1a1a1;
    --input: #e5e5e5;
    --muted: #f5f5f5;
    --accent: #f5f5f5;
    --border: #e5e5e5;
    --radius: 0rem;
    --popover: #ffffff;
    --primary: #737373;
    --font-mono: Geist Mono, monospace;
    --font-sans: Geist Mono, monospace;
    --secondary: #f5f5f5;
    --background: #0a0a0a;
    --foreground: #fafafa;
    --destructive: #e7000b;
    --card-foreground: #0a0a0a;
    --sidebar-primary: #171717;
    --muted-foreground: #717171;
    --accent-foreground: #171717;
    --popover-foreground: #0a0a0a;
    --primary-foreground: #fafafa;
    --secondary-foreground: #171717;
  }

  * {
    box-sizing: border-box;
    border-radius: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #0a0a0a;
    color: #fafafa;
    font-family: var(--font-geist-mono), 'Courier New', monospace;
    -webkit-font-smoothing: antialiased;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Grid background texture */
  .grid-bg {
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  /* Section container */
  .section {
    max-width: 1120px;
    margin: 0 auto;
    padding: 96px 24px;
  }

  /* Section label */
  .section-label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #737373;
    margin-bottom: 32px;
  }

  /* Horizontal rule divider */
  .divider {
    border: none;
    border-top: 1px solid #383838;
    margin: 0;
  }

  /* Tag / pill badge */
  .tag {
    display: inline-block;
    font-size: 11px;
    padding: 2px 8px;
    border: 1px solid #383838;
    color: #737373;
    font-family: var(--font-geist-mono), monospace;
    letter-spacing: 0.02em;
  }

  /* Pulsing availability dot — explicit 50% overrides the * reset */
  .pulse {
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50% !important;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* No scrollbar for carousels */
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-style: none; }

  /* Hover link */
  .hover-link {
    color: #737373;
    transition: color 0.2s;
  }
  .hover-link:hover { color: #fafafa; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: #383838; }
  ::-webkit-scrollbar-thumb:hover { background: #525252; }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`. Some components may look different but no TypeScript errors.

- [ ] **Step 3: Commit**

  ```bash
  git add app/globals.css
  git commit -m "feat: replace CSS tokens with retro futurism theme from theme.md"
  ```

---

## Chunk 2: Nav + Hero

### Task 4: Restyle Nav

**Files:**
- Modify: `app/components/Nav.tsx`

- [ ] **Step 1: Replace Nav.tsx**

  Replace the full contents of `app/components/Nav.tsx` with:

  ```tsx
  export default function Nav() {
    return (
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: "#0a0a0a",
          borderBottom: "1px solid #383838",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
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
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {[
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Skills", "#skills"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="hover-link"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "6px 14px",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:khembyone@yahoo.com"
              style={{
                marginLeft: 16,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "#fafafa",
                padding: "7px 16px",
                textDecoration: "none",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Visual check**

  ```bash
  npm run dev
  ```
  Open http://localhost:3000. Verify: solid black nav, white KH badge, uppercase monospace links, white "HIRE ME" button. No frosted glass, no gradient.

- [ ] **Step 4: Commit**

  ```bash
  git add app/components/Nav.tsx
  git commit -m "feat: restyle nav — sharp edges, monospace, solid black bg"
  ```

---

### Task 5: Replace Hero with MinimalHero particle animation

**Files:**
- Modify: `app/components/Hero.tsx`

This replaces the current orb/gradient hero entirely with the MinimalHero canvas-based particle animation from `ui_refactor.md`, adapted for portfolio content.

- [ ] **Step 1: Replace Hero.tsx**

  Replace the full contents of `app/components/Hero.tsx` with:

  ```tsx
  "use client";

  import { useEffect, useRef } from "react";

  type Particle = {
    x: number;
    y: number;
    speed: number;
    opacity: number;
    fadeDelay: number;
    fadeStart: number;
    fadingOut: boolean;
  };

  export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const setSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      setSize();

      let particles: Particle[] = [];
      let raf = 0;

      const count = () => Math.floor((canvas.width * canvas.height) / 7000);

      const make = (): Particle => {
        const fadeDelay = Math.random() * 600 + 100;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: Math.random() / 5 + 0.1,
          opacity: 0.7,
          fadeDelay,
          fadeStart: Date.now() + fadeDelay,
          fadingOut: false,
        };
      };

      const reset = (p: Particle) => {
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
        p.speed = Math.random() / 5 + 0.1;
        p.opacity = 0.7;
        p.fadeDelay = Math.random() * 600 + 100;
        p.fadeStart = Date.now() + p.fadeDelay;
        p.fadingOut = false;
      };

      const init = () => {
        particles = [];
        for (let i = 0; i < count(); i++) particles.push(make());
      };

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.y -= p.speed;
          if (p.y < 0) reset(p);
          if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
          if (p.fadingOut) {
            p.opacity -= 0.008;
            if (p.opacity <= 0) reset(p);
          }
          ctx.fillStyle = `rgba(250, 250, 250, ${p.opacity})`;
          ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
        });
        raf = requestAnimationFrame(draw);
      };

      const onResize = () => { setSize(); init(); };
      window.addEventListener("resize", onResize);
      init();
      raf = requestAnimationFrame(draw);

      return () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(raf);
      };
    }, []);

    return (
      <section
        className="grid-bg"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 56, // nav height
        }}
      >
        {/* Accent lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <style>{`
            @keyframes drawX {
              0% { transform: scaleX(0); opacity: 0; }
              60% { opacity: .9; }
              100% { transform: scaleX(1); opacity: .4; }
            }
            @keyframes drawY {
              0% { transform: scaleY(0); opacity: 0; }
              60% { opacity: .9; }
              100% { transform: scaleY(1); opacity: .4; }
            }
            .hline { position:absolute; height:1px; left:0; right:0; background:#383838; transform:scaleX(0); animation: drawX 800ms cubic-bezier(.22,.61,.36,1) forwards; }
            .hline:nth-child(1){ top:25%; animation-delay:150ms; }
            .hline:nth-child(2){ top:75%; animation-delay:350ms; }
            .vline { position:absolute; width:1px; top:0; bottom:0; background:#383838; transform:scaleY(0); animation: drawY 900ms cubic-bezier(.22,.61,.36,1) forwards; }
            .vline:nth-child(3){ left:20%; animation-delay:500ms; }
            .vline:nth-child(4){ left:80%; animation-delay:650ms; }
          `}</style>
          <div className="hline" />
          <div className="hline" />
          <div className="vline" />
          <div className="vline" />
        </div>

        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            mixBlendMode: "screen",
            opacity: 0.6,
          }}
        />

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

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(40px, 8vw, 88px)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#fafafa",
              margin: "0 0 16px",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Kaitlyn Hemby
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#737373",
              margin: "0 0 24px",
            }}
          >
            Software Engineer · Technical Leader · AI Builder
          </p>

          {/* Bio */}
          <p
            style={{
              fontSize: 15,
              color: "#a1a1a1",
              lineHeight: 1.6,
              margin: "0 auto 36px",
              maxWidth: 560,
            }}
          >
            5+ years building at the intersection of APIs, product strategy, and AI.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 56,
            }}
          >
            <a
              href="mailto:khembyone@yahoo.com"
              style={{
                background: "#fafafa",
                color: "#0a0a0a",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/kaitlynhemby"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #383838",
                color: "#737373",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/kaitlynhemby"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #383838",
                color: "#737373",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              GitHub ↗
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 0,
              borderTop: "1px solid #383838",
              paddingTop: 32,
            }}
          >
            {[
              ["5+", "Years Experience"],
              ["2×", "Technical Co-Founder"],
              ["AI", "Native Builder"],
            ].map(([num, label], i) => (
              <div
                key={label}
                style={{
                  flex: 1,
                  maxWidth: 180,
                  textAlign: "center",
                  borderLeft: i > 0 ? "1px solid #383838" : "none",
                  padding: "0 24px",
                }}
              >
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "#fafafa",
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#737373",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Visual check**

  ```bash
  npm run dev
  ```
  Open http://localhost:3000. Verify: particle animation visible, accent lines animate in, name + tagline + CTAs visible, stats row at bottom. No orbs or gradient text.

- [ ] **Step 4: Commit**

  ```bash
  git add app/components/Hero.tsx
  git commit -m "feat: replace hero with MinimalHero particle animation"
  ```

---

## Chunk 3: Featured Projects — EvervaultCard + Bento Grid

### Task 6: Create EvervaultCard component

**Files:**
- Create: `app/components/ui/EvervaultCard.tsx`

- [ ] **Step 1: Create ui directory and EvervaultCard**

  Create `app/components/ui/EvervaultCard.tsx`:

  ```tsx
  "use client";

  import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
  import { useState, useEffect } from "react";
  import { cn } from "@/lib/utils";

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateRandomString(length: number) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  function CardPattern({
    mouseX,
    mouseY,
    randomString,
    accentColor,
  }: {
    mouseX: ReturnType<typeof useMotionValue<number>>;
    mouseY: ReturnType<typeof useMotionValue<number>>;
    randomString: string;
    accentColor: string;
  }) {
    const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
      <div className="pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition duration-500"
          style={{ ...style, background: `${accentColor}22` }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100"
          style={style}
        >
          <p className="absolute inset-x-0 text-[10px] h-full break-words whitespace-pre-wrap text-white font-mono transition duration-500 p-2 leading-3">
            {randomString}
          </p>
        </motion.div>
      </div>
    );
  }

  export function EvervaultCard({
    className,
    accentColor = "#6284f7",
    abbr,
  }: {
    className?: string;
    accentColor?: string;
    abbr?: string;
  }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [randomString, setRandomString] = useState("");

    useEffect(() => {
      setRandomString(generateRandomString(1000));
    }, []);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
      setRandomString(generateRandomString(1000));
    }

    return (
      <div
        className={cn("w-full h-full relative overflow-hidden group/card", className)}
        onMouseMove={onMouseMove}
        style={{ background: `${accentColor}10` }}
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} accentColor={accentColor} />
        {abbr && (
          <div
            className="relative z-10 flex items-center justify-center h-full"
            style={{ color: accentColor, fontSize: 32, fontWeight: 700, opacity: 0.25, letterSpacing: "-0.02em" }}
          >
            {abbr}
          </div>
        )}
      </div>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

  ```bash
  git add app/components/ui/EvervaultCard.tsx
  git commit -m "feat: add EvervaultCard with framer-motion hover effect"
  ```

---

### Task 7: Create FeaturedProjects bento grid

**Files:**
- Create: `app/components/FeaturedProjects.tsx`

This component renders the 3-project bento grid (1 large + 2 smaller) directly below the hero. Uses `EvervaultCard` for the preview areas.

- [ ] **Step 1: Create FeaturedProjects.tsx**

  Create `app/components/FeaturedProjects.tsx`:

  ```tsx
  import { EvervaultCard } from "./ui/EvervaultCard";
  import { projects } from "../data/projects";

  // Top 3 projects to feature — IDs must match app/data/projects.ts exactly
  const FEATURED_IDS = ["lifesparklabs", "vortexeai", "spxfit"];

  export default function FeaturedProjects() {
    const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);
    const [main, ...rest] = featured;

    return (
      <section id="featured" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
        <div className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="section-label">Featured Projects</div>

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
            {/* Main large card */}
            {main && (
              <a
                href={main.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#0a0a0a",
                  textDecoration: "none",
                  color: "inherit",
                  gridRow: "1 / 3",
                }}
              >
                {/* Preview area */}
                <div style={{ height: 220, borderLeft: `3px solid ${main.color}`, position: "relative" }}>
                  <EvervaultCard accentColor={main.color} abbr={main.abbr} className="h-full" />
                </div>
                {/* Card body */}
                <div style={{ padding: "20px 24px", borderTop: "1px solid #383838" }}>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: main.color,
                      marginBottom: 8,
                    }}
                  >
                    Featured · 01 · {main.category}
                  </div>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fafafa",
                      letterSpacing: "-0.02em",
                      marginBottom: 6,
                    }}
                  >
                    {main.name}
                  </div>
                  <div style={{ fontSize: 12, color: "#737373", marginBottom: 4 }}>{main.role}</div>
                  <div style={{ fontSize: 12, color: "#a1a1a1", lineHeight: 1.6, marginBottom: 14 }}>
                    {main.tagline}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
                    {main.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                    {main.technologies.length > 5 && (
                      <span className="tag">+{main.technologies.length - 5}</span>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: main.color,
                    }}
                  >
                    View Project →
                  </span>
                </div>
              </a>
            )}

            {/* Small cards */}
            {rest.map((project, i) => (
              <a
                key={project.id}
                href={project.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  background: "#0a0a0a",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Preview area */}
                <div style={{ height: 110, borderLeft: `3px solid ${project.color}`, position: "relative" }}>
                  <EvervaultCard accentColor={project.color} abbr={project.abbr} className="h-full" />
                </div>
                {/* Card body */}
                <div style={{ padding: "14px 16px", borderTop: "1px solid #383838" }}>
                  <div
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: project.color,
                      marginBottom: 6,
                    }}
                  >
                    Featured · 0{i + 2}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fafafa",
                      letterSpacing: "-0.01em",
                      marginBottom: 4,
                    }}
                  >
                    {project.name}
                  </div>
                  <div style={{ fontSize: 11, color: "#737373", marginBottom: 10 }}>{project.tagline}</div>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: project.color,
                    }}
                  >
                    View →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* View all link */}
          <div style={{ marginTop: 24, textAlign: "right" }}>
            <a
              href="#projects"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#737373",
              }}
              className="hover-link"
            >
              View All Projects →
            </a>
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Add FeaturedProjects to page.tsx to verify**

  Replace the full contents of `app/page.tsx` with:

  ```tsx
  import Nav from "./components/Nav";
  import Hero from "./components/Hero";
  import FeaturedProjects from "./components/FeaturedProjects";
  import About from "./components/About";
  import Projects from "./components/Projects";
  import Experience from "./components/Experience";
  import Skills from "./components/Skills";
  import Education from "./components/Education";
  import Contact from "./components/Contact";

  export default function Home() {
    return (
      <>
        <Nav />
        <Hero />
        <FeaturedProjects />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </>
    );
  }
  ```

  Note: This is a temporary intermediate state. Task 12 will replace page.tsx with the final order.

- [ ] **Step 3: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 4: Visual check**

  ```bash
  npm run dev
  ```
  Open http://localhost:3000. Scroll past the hero. Verify: bento grid shows 1 large card (LifeSpark Labs) + 2 smaller (VortexeAI, SPXFit). Hover over a card preview area and confirm the character shimmer effect appears. Click a card to confirm it links correctly.

- [ ] **Step 5: Commit**

  ```bash
  git add app/components/FeaturedProjects.tsx app/components/ui/EvervaultCard.tsx app/page.tsx
  git commit -m "feat: add FeaturedProjects bento grid with EvervaultCard hover effect"
  ```

---

## Chunk 4: AboutExperience — Merged Two-Column Section

### Task 8: Create merged AboutExperience component

**Files:**
- Create: `app/components/AboutExperience.tsx`
- Reference: `app/components/About.tsx` (content source — do not delete, just stop using it in page.tsx)
- Reference: `app/components/Experience.tsx` (content source — do not delete)

All content from `About.tsx` (headshot, bio, 4 highlight cards) goes into the left column. All content from `Experience.tsx` (5 timeline entries) goes into the right column.

- [ ] **Step 1: Create AboutExperience.tsx**

  Create `app/components/AboutExperience.tsx`:

  ```tsx
  import Image from "next/image";

  const highlights = [
    {
      badge: "AI",
      color: "#f97316",
      title: "AI-First Builder",
      desc: "Claude, OpenAI, RAG pipelines, n8n agents",
      tags: ["LLMs", "RAG", "Agents", "n8n"],
    },
    {
      badge: "FS",
      color: "#6284f7",
      title: "Full-Stack Engineer",
      desc: "React, Next.js, Node.js, TypeScript, MongoDB, Supabase",
      tags: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      badge: "TL",
      color: "#9b5cf6",
      title: "Technical Leader",
      desc: "CTO & Co-Founder experience, architecture, sprint planning",
      tags: ["Architecture", "Roadmaps", "Agile"],
    },
    {
      badge: "PM",
      color: "#10b981",
      title: "Product-Minded",
      desc: "100+ customer interviews, technical specifications",
      tags: ["Strategy", "Specs", "User Research"],
    },
  ];

  const experiences = [
    {
      company: "LifeSpark Labs",
      role: "Co-Founder / CTO",
      period: "Mar 2025 — Mar 2026",
      location: "San Diego, CA",
      color: "#14b8a6",
      bullets: [
        "Led product strategy and full-stack architecture for an AI-powered job intelligence platform",
        "Directed patent-pending R&D for proprietary AI/ML features",
        "Integrated AI-assisted workflows to automate candidate matching and career coaching",
        "Managed cross-functional engineering team, sprint planning, and technical roadmap",
        "Conducted 100+ user testing sessions to guide UX and feature prioritization",
        "Established KPI frameworks and monitoring/observability stack with Sentry and Amplitude",
      ],
      tags: ["MongoDB", "Node.js", "AWS", "CI/CD", "Vercel", "AI", "TypeScript", "Sentry"],
    },
    {
      company: "VortexeAI",
      role: "Co-Founder",
      period: "Jun 2024 — Nov 2025",
      location: "Remote, CA",
      color: "#9b5cf6",
      bullets: [
        "Validated product direction through 100+ user interviews",
        "Designed visual drag-and-drop pipeline editor for AI agent workflows",
        "Architected backend schema and API design for ML model integration",
        "Built frontend-ML bridge for real-time inference and workflow execution",
      ],
      tags: ["React", "TypeScript", "API Design", "ML Integration"],
    },
    {
      company: "AIREAL",
      role: "UI/UX Technical Designer",
      period: "Feb 2024 — Aug 2024",
      location: "Remote, CA",
      color: "#ec4899",
      bullets: [
        "Improved user retention by 10% through modular UI system redesign",
        "Implemented real-time UI for a 100+ home community AR experience",
        "Delivered full UE5 implementation with motion UI and A/B tested designs",
      ],
      tags: ["Unreal Engine 5", "UMG", "C++", "Figma", "A/B Testing"],
    },
    {
      company: "Overwhelming Studios",
      role: "UI/UX Designer",
      period: "Apr 2023 — Feb 2024",
      location: "Remote, CA",
      color: "#f97316",
      bullets: [
        "Increased player retention by 10% and satisfaction by 30% via HUD redesign",
        "Built UE5 motion UI prototypes for horror sci-fi game",
      ],
      tags: ["UE5", "Prototyping", "Motion UI", "HUD Design"],
    },
    {
      company: "SAGE Collectibles",
      role: "Lead Graphic Designer",
      period: "Jan 2019 — Feb 2024",
      location: "Carlsbad, CA",
      color: "#10b981",
      bullets: [
        "Managed 15+ product lines producing 1000+ trading cards annually",
        "Drove 20% sales increase through design system and Python automation",
      ],
      tags: ["Python", "Automation", "Design Systems", "Production Pipelines"],
    },
  ];

  export default function AboutExperience() {
    return (
      <section id="about" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
        <div className="section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
          >
            {/* Left — About */}
            <div>
              <div className="section-label">About</div>

              {/* Headshot */}
              <div style={{ marginBottom: 32 }}>
                <Image
                  src="/KaitlynHemby.png"
                  alt="Kaitlyn Hemby"
                  width={120}
                  height={120}
                  style={{ display: "block", border: "1px solid #383838" }}
                />
              </div>

              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#fafafa",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Engineering platforms that scale and ship.
              </h2>

              <p style={{ fontSize: 13, color: "#a1a1a1", lineHeight: 1.8, marginBottom: 40 }}>
                5+ years as a Product and Technology Leader, building at the intersection of engineering,
                AI, and product strategy. From trading card automation to AI-powered platforms,
                I&apos;ve led technical teams, co-founded startups, and shipped products used by real people.
              </p>

              {/* Highlight cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#383838", border: "1px solid #383838" }}>
                {highlights.map((h) => (
                  <div key={h.badge} style={{ background: "#0a0a0a", padding: "16px" }}>
                    <div
                      style={{
                        display: "inline-block",
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        color: "#0a0a0a",
                        background: h.color,
                        padding: "2px 6px",
                        marginBottom: 10,
                      }}
                    >
                      {h.badge}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#fafafa", marginBottom: 4 }}>
                      {h.title}
                    </div>
                    <div style={{ fontSize: 11, color: "#737373", lineHeight: 1.5, marginBottom: 10 }}>
                      {h.desc}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {h.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Experience */}
            <div id="experience">
              <div className="section-label">Experience</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {experiences.map((exp, i) => (
                  <div
                    key={exp.company}
                    style={{
                      borderLeft: `3px solid ${exp.color}`,
                      paddingLeft: 20,
                      paddingBottom: i < experiences.length - 1 ? 36 : 0,
                      marginLeft: 0,
                    }}
                  >
                    {/* Header */}
                    <div style={{ marginBottom: 4 }}>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#fafafa",
                          letterSpacing: "-0.01em",
                          marginBottom: 2,
                        }}
                      >
                        {exp.company}
                      </div>
                      <div style={{ fontSize: 12, color: exp.color, marginBottom: 2 }}>{exp.role}</div>
                      <div style={{ fontSize: 10, color: "#737373", letterSpacing: "0.04em", marginBottom: 12 }}>
                        {exp.period} · {exp.location}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul style={{ margin: "0 0 12px", padding: 0, listStyle: "none" }}>
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            fontSize: 12,
                            color: "#a1a1a1",
                            lineHeight: 1.6,
                            marginBottom: 6,
                            paddingLeft: 12,
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: exp.color,
                            }}
                          >
                            —
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {exp.tags.map((t) => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

  ```bash
  git add app/components/AboutExperience.tsx
  git commit -m "feat: create merged AboutExperience two-column section"
  ```

---

## Chunk 5: Skills + Projects Restyled

### Task 9: Restyle Skills component

**Files:**
- Modify: `app/components/Skills.tsx`

- [ ] **Step 1: Replace Skills.tsx**

  Replace the full contents of `app/components/Skills.tsx` with:

  ```tsx
  const skillCategories = [
    { label: "Frontend", color: "#6284f7", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { label: "Backend", color: "#9b5cf6", skills: ["Node.js", "Express", "REST APIs", "Webhooks", "Prisma"] },
    { label: "AI & ML", color: "#f97316", skills: ["Claude / Claude Code", "OpenAI", "Gemini", "RAG Pipelines", "AI Agents", "n8n Workflows"] },
    { label: "Cloud & Infra", color: "#10b981", skills: ["AWS", "Google Cloud", "Docker", "Vercel", "CI/CD", "GitHub Actions"] },
    { label: "Databases", color: "#ec4899", skills: ["MongoDB", "Supabase", "PostgreSQL", "Prisma ORM"] },
    { label: "Auth & Payments", color: "#fbbf24", skills: ["Auth0", "Stripe", "OAuth 2.0", "JWT"] },
    { label: "Monitoring & Tools", color: "#38bdf8", skills: ["Sentry", "Amplitude", "GitHub", "Postman"] },
    { label: "Design & Prototyping", color: "#a78bfa", skills: ["Figma", "Unreal Engine 5", "UMG", "Design Systems"] },
  ];

  const leadershipSkills = [
    "Technical Architecture Design",
    "Product Strategy",
    "Agile & Sprint Planning",
    "Cross-Functional Leadership",
    "System Architecture & Scalability",
    "QA & Testing Strategy",
    "Cost Optimization & Technical Forecasting",
    "UX Research & User Testing",
  ];

  export default function Skills() {
    return (
      <section id="skills" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
        <div className="section">
          <div className="section-label">Skills</div>

          {/* Category grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 1,
              background: "#383838",
              border: "1px solid #383838",
              marginBottom: 1,
            }}
          >
            {skillCategories.map((cat) => (
              <div
                key={cat.label}
                style={{
                  background: "#0a0a0a",
                  padding: "20px",
                  borderTop: `3px solid ${cat.color}`,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: cat.color,
                    marginBottom: 14,
                    fontWeight: 700,
                  }}
                >
                  {cat.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership card */}
          <div
            style={{
              background: "#0a0a0a",
              border: "1px solid #383838",
              padding: "20px",
              borderTop: "3px solid #fafafa",
            }}
          >
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#fafafa",
                marginBottom: 14,
                fontWeight: 700,
              }}
            >
              Leadership & Strategy
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {leadershipSkills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

  ```bash
  git add app/components/Skills.tsx
  git commit -m "feat: restyle skills — flat cards, colored top border accents"
  ```

---

### Task 10: Restyle Projects component

**Files:**
- Modify: `app/components/Projects.tsx`

This is the "All Projects" section with category filtering. Restyle filter tabs and project cards to match the new aesthetic — no gradients, no rounded corners, flat borders.

- [ ] **Step 1: Replace Projects.tsx**

  Replace the full contents of `app/components/Projects.tsx` with:

  ```tsx
  "use client";

  import { useState, useRef } from "react";
  import Link from "next/link";
  import { projects, CATEGORIES } from "../data/projects";

  export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const scrollRef = useRef<HTMLDivElement>(null);

    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    const scroll = (direction: number) => {
      scrollRef.current?.scrollBy({ left: direction * 332, behavior: "smooth" });
    };

    return (
      <section id="projects" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
        <div className="section">
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 36,
            }}
          >
            <div>
              <div className="section-label">All Projects</div>
              <h2
                style={{
                  fontSize: "clamp(24px, 4vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#fafafa",
                  lineHeight: 1.1,
                }}
              >
                Things I&apos;ve designed &amp; built.
              </h2>
            </div>

            {/* Scroll arrows */}
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                style={{
                  width: 36,
                  height: 36,
                  background: "transparent",
                  border: "1px solid #383838",
                  color: "#737373",
                  cursor: "pointer",
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ←
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                style={{
                  width: 36,
                  height: 36,
                  background: "transparent",
                  border: "1px solid #383838",
                  color: "#737373",
                  cursor: "pointer",
                  fontSize: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Category filter tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 32, borderBottom: "1px solid #383838" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 20px",
                  border: "none",
                  background: "transparent",
                  color: activeCategory === cat ? "#fafafa" : "#737373",
                  fontSize: 11,
                  fontWeight: activeCategory === cat ? 700 : 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-geist-mono)",
                  borderBottom: activeCategory === cat ? "2px solid #fafafa" : "2px solid transparent",
                  marginBottom: -1,
                  transition: "color 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="no-scrollbar"
            style={{
              display: "flex",
              gap: 1,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              background: "#383838",
            }}
          >
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                style={{
                  minWidth: 300,
                  maxWidth: 300,
                  scrollSnapAlign: "start",
                  cursor: "pointer",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  textDecoration: "none",
                  background: "#0a0a0a",
                  borderLeft: `3px solid ${project.color}`,
                }}
              >
                {/* Preview area */}
                <div
                  style={{
                    height: 140,
                    width: "100%",
                    background: project.previewImage
                      ? "#0a0a0a"
                      : `${project.color}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                    borderBottom: "1px solid #383838",
                  }}
                >
                  {project.previewImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.previewImage}
                      alt={project.name}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: project.color,
                        opacity: 0.3,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.abbr}
                    </div>
                  )}
                  {/* Category badge */}
                  <span
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: project.color,
                      fontFamily: "var(--font-geist-mono)",
                      zIndex: 2,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "16px 18px 16px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#fafafa",
                      letterSpacing: "-0.01em",
                      marginBottom: 4,
                      lineHeight: 1.3,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#737373",
                      marginBottom: 14,
                      letterSpacing: "0.01em",
                      lineHeight: 1.5,
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Tech tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 4,
                      marginBottom: 16,
                      flex: 1,
                      alignContent: "flex-start",
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: project.color,
                    }}
                  >
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 5: Visual check**

  ```bash
  npm run dev
  ```
  Scroll to the Projects section. Verify: filter tabs are plain text (not pills), project cards have flat borders and no rounded corners, colors match accent scheme.

- [ ] **Step 6: Commit**

  ```bash
  git add app/components/Projects.tsx
  git commit -m "feat: restyle projects — flat tabs, sharp card borders"
  ```

---

## Chunk 6: Contact, Page Wiring, Cleanup

### Task 11: Restyle Contact component

**Files:**
- Modify: `app/components/Contact.tsx`

- [ ] **Step 1: Replace Contact.tsx**

  Replace the full contents of `app/components/Contact.tsx` with:

  ```tsx
  export default function Contact() {
    return (
      <section id="contact" style={{ background: "#0a0a0a" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ textAlign: "center" }}>Contact</div>

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

          <p style={{ fontSize: 13, color: "#737373", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
            Open to Software Engineer and Technical Leader roles. Let&apos;s talk.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 80 }}>
            <a
              href="mailto:khembyone@yahoo.com"
              style={{
                background: "#fafafa",
                color: "#0a0a0a",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/kaitlynhemby"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1px solid #383838",
                color: "#737373",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "10px 24px",
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            borderTop: "1px solid #383838",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
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
                letterSpacing: "0.05em",
              }}
            >
              KH
            </div>
            <span style={{ fontSize: 12, color: "#737373" }}>Kaitlyn Hemby</span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="https://linkedin.com/in/kaitlynhemby"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link"
              style={{ fontSize: 11, letterSpacing: "0.08em" }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://kaitlynhemby.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link"
              style={{ fontSize: 11, letterSpacing: "0.08em" }}
            >
              kaitlynhemby.com ↗
            </a>
          </div>
        </div>
      </section>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`

- [ ] **Step 3: Commit**

  ```bash
  git add app/components/Contact.tsx
  git commit -m "feat: restyle contact — clean CTA, sharp footer bar"
  ```

---

### Task 12: Wire up page.tsx with new section order

**Files:**
- Modify: `app/page.tsx`

New order: Nav → Hero → FeaturedProjects → AboutExperience → Skills → Projects → Contact. Remove standalone `<About />`, `<Experience />`, `<Education />`. Remove `.divider` elements between sections (sections now self-manage their bottom borders).

- [ ] **Step 1: Replace page.tsx**

  Replace the full contents of `app/page.tsx` with:

  ```tsx
  import Nav from "./components/Nav";
  import Hero from "./components/Hero";
  import FeaturedProjects from "./components/FeaturedProjects";
  import AboutExperience from "./components/AboutExperience";
  import Skills from "./components/Skills";
  import Projects from "./components/Projects";
  import Contact from "./components/Contact";

  export default function Home() {
    return (
      <>
        <Nav />
        <Hero />
        <FeaturedProjects />
        <AboutExperience />
        <Skills />
        <Projects />
        <Contact />
      </>
    );
  }
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully` with no TypeScript errors.

- [ ] **Step 3: Full visual review**

  ```bash
  npm run dev
  ```
  Walk through the full page:
  1. Nav: solid black, white KH badge, monospace links, white "HIRE ME" button
  2. Hero: particle animation, accent lines animate in, name + CTAs + stats row
  3. Featured Projects: bento grid (1 large + 2 small), EvervaultCard hover effect on all three
  4. About+Experience: two columns side by side — headshot + bio + highlight cards left, timeline right
  5. Skills: colored top-border category cards, leadership card
  6. Projects: flat filter tabs, sharp project cards
  7. Contact: clean CTA, footer bar

- [ ] **Step 4: Commit**

  ```bash
  git add app/page.tsx
  git commit -m "feat: wire up new page order — Nav Hero FeaturedProjects AboutExperience Skills Projects Contact"
  ```

---

### Task 13: Final cleanup and production build

**Files:**
- Check: `app/components/About.tsx`, `app/components/Experience.tsx`, `app/components/Education.tsx`

These are no longer used in `page.tsx` but can be left in place (they don't affect the build). No action needed unless there are orphaned imports causing lint errors.

- [ ] **Step 1: Run final production build**

  ```bash
  npm run build
  ```
  Expected: `✓ Compiled successfully`. Note any warnings (missing alt text, unused imports) and fix them.

- [ ] **Step 2: Fix any build warnings**

  Common issues to check:
  - `<img>` without alt text → add `alt` prop
  - Unused imports in modified files → remove them
  - `any` type warnings in EvervaultCard → already typed correctly

- [ ] **Step 3: Commit any fixes**

  Run `git status` first to confirm only expected files are modified, then stage them explicitly:

  ```bash
  git status
  # Stage only the files listed as modified — example:
  git add app/components/Projects.tsx app/components/Contact.tsx
  git commit -m "fix: resolve build warnings from UI refactor"
  ```

- [ ] **Step 4: Final tag**

  ```bash
  git tag ui-refactor-complete
  ```
