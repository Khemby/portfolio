export default function Hero() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "CTO", label: "Co-Founder" },
    { value: "100+", label: "User Interviews" },
    { value: "AI", label: "Native Builder" },
  ];

  const stack = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "MongoDB",
    "Claude AI",
    "Docker",
    "Supabase",
  ];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <div
        className="grid-bg"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      {/* Gradient orbs */}
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          background: "#4f7cf6",
          top: "-220px",
          left: "-220px",
          opacity: 0.11,
        }}
      />
      <div
        className="orb"
        style={{
          width: 520,
          height: 520,
          background: "#9b5cf6",
          bottom: "-100px",
          right: "-100px",
          opacity: 0.1,
        }}
      />
      <div
        className="orb"
        style={{
          width: 280,
          height: 280,
          background: "#ec4899",
          top: "38%",
          right: "18%",
          opacity: 0.055,
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 260,
          background: "linear-gradient(to bottom, transparent, #070708)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "128px 24px 100px",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        {/* Available badge */}
        <div style={{ marginBottom: 36 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 99,
              border: "1px solid rgba(52,211,153,0.35)",
              backgroundColor: "rgba(52,211,153,0.08)",
              fontSize: 11,
              fontWeight: 600,
              color: "#34d399",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.1em",
            }}
          >
            <span
              className="pulse"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#34d399",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "clamp(56px, 9vw, 96px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "#f0f0f2",
            marginBottom: 28,
          }}
        >
          Kaitlyn
          <br />
          <span className="gradient-text">Hemby</span>
        </h1>

        {/* Role line */}
        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 20px)",
            fontWeight: 500,
            color: "#888",
            marginBottom: 22,
            letterSpacing: "-0.01em",
          }}
        >
          Software Engineer &nbsp;&bull;&nbsp; Technical Leader &nbsp;&bull;&nbsp; AI Builder
        </p>

        {/* Bio */}
        <p
          style={{
            maxWidth: 540,
            fontSize: 16,
            lineHeight: 1.8,
            color: "#5a5a5a",
            marginBottom: 52,
          }}
        >
          Building scalable platforms at the intersection of APIs, developer
          tooling, and AI-driven workflows. Former CTO and Co-Founder with 5+
          years shipping production systems end-to-end.
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px 52px",
            marginBottom: 52,
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#f0f0f2",
                  lineHeight: 1,
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "-0.03em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#444",
                  fontWeight: 500,
                  marginTop: 6,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 64 }}
        >
          <a
            href="mailto:khembyone@yahoo.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6284f7, #9b5cf6)",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
              letterSpacing: "-0.01em",
            }}
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/kaitlyn-hemby"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#ccc",
              fontWeight: 600,
              fontSize: 14,
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
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#ccc",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Tech stack */}
        <div>
          <div
            className="section-label"
            style={{ marginBottom: 14, display: "block" }}
          >
            Current Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {stack.map((t) => (
              <span
                key={t}
                className="tag"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#666",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
