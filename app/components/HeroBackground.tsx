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

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const parent = canvas.parentElement!;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
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
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {/* Accent lines */}
      <style>{`
        @keyframes drawX {
          0%   { transform: scaleX(0); opacity: 0; }
          40%  { opacity: .9; }
          70%  { transform: scaleX(1); opacity: .4; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes drawY {
          0%   { transform: scaleY(0); opacity: 0; }
          40%  { opacity: .9; }
          70%  { transform: scaleY(1); opacity: .4; }
          100% { transform: scaleY(1); opacity: 0; }
        }
      `}</style>
      <div style={{ position: "absolute", inset: 0 }}>
        {/* Horizontal lines */}
        {[
          { top: "25%", animationDelay: "150ms" },
          { top: "75%", animationDelay: "350ms" },
        ].map(({ top, animationDelay }, i) => (
          <div key={`h${i}`} style={{
            position: "absolute", height: 1, left: 0, right: 0,
            background: "#383838", top,
            transform: "scaleX(0)",
            animation: `drawX 1800ms cubic-bezier(.22,.61,.36,1) ${animationDelay} forwards`,
          }} />
        ))}
        {/* Vertical lines */}
        {[
          { left: "20%", animationDelay: "500ms" },
          { left: "80%", animationDelay: "650ms" },
        ].map(({ left, animationDelay }, i) => (
          <div key={`v${i}`} style={{
            position: "absolute", width: 1, top: 0, bottom: 0,
            background: "#383838", left,
            transform: "scaleY(0)",
            animation: `drawY 1800ms cubic-bezier(.22,.61,.36,1) ${animationDelay} forwards`,
          }} />
        ))}
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
