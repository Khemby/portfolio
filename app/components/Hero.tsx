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
