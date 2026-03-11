"use client";

import CornerBrackets from "./ui/CornerBrackets";
import { ContactButton } from "./ui/contact-button";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "58vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 56, // nav height
        paddingBottom: 32,
      }}
    >
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
          <span style={{ color: "#56e370" }}>OPEN TO OPPORTUNITIES</span>
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
            marginBottom: 32,
          }}
        >
          <ContactButton variant="hero" />
          <a
            href="https://linkedin.com/in/kaitlyn-hemby"
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
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/khemby"
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
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
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
            paddingTop: 20,
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
  );
}
