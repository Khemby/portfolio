"use client";

import { useState } from "react";
import { ContactModal } from "./ui/contact-modal";

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
            <button
              onClick={() => setModalOpen(true)}
              style={{
                marginLeft: 16,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0a0a0a",
                background: "#fafafa",
                padding: "7px 16px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
