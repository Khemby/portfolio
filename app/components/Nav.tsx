"use client";

import { useState } from "react";
import { ContactModal } from "./ui/contact-modal";

const NAV_LINKS = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
] as const;

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

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
              className="nav-portfolio-label"
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

          {/* Desktop nav links */}
          <div className="nav-desktop">
            {NAV_LINKS.map(([label, href]) => (
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

          {/* Hamburger button (mobile only) */}
          <button
            className="nav-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            style={{
              background: "transparent",
              border: "1px solid #383838",
              color: "#fafafa",
              cursor: "pointer",
              padding: "8px 10px",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ display: "block", width: 18, height: 1, background: "#fafafa" }} />
            <span style={{ display: "block", width: 18, height: 1, background: "#fafafa" }} />
            <span style={{ display: "block", width: 18, height: 1, background: "#fafafa" }} />
          </button>
        </div>
      </nav>

      {/* Drawer backdrop */}
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 98,
            background: "rgba(0,0,0,0.6)",
          }}
        />
      )}

      {/* Mobile slide-in drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 260,
          zIndex: 99,
          background: "#0a0a0a",
          borderLeft: "1px solid #383838",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.25s ease",
        }}
      >
        {/* Drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 24,
                height: 24,
                background: "#fafafa",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 700,
                color: "#0a0a0a",
                letterSpacing: "0.05em",
              }}
            >
              KH
            </div>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close menu"
            style={{
              background: "transparent",
              border: "none",
              color: "#737373",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
              padding: 4,
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeDrawer}
              className="hover-link"
              style={{
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid #1a1a1a",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hire Me */}
        <button
          onClick={() => { closeDrawer(); setModalOpen(true); }}
          style={{
            marginTop: 32,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            background: "#fafafa",
            padding: "12px 0",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-geist-mono)",
            width: "100%",
          }}
        >
          Hire Me
        </button>
      </div>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
