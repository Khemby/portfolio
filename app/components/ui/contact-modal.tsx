"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

type ContactModalProps = {
  onClose: () => void;
};

export function ContactModal({ onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (typeof document === "undefined") return null;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setStatus(res.ok ? "sent" : "error");
  };

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0a0a",
          border: "1px solid #383838",
          padding: "40px",
          width: "100%",
          maxWidth: 480,
          position: "relative",
        }}
      >
        {/* Corner brackets */}
        {[
          { top: 0, left: 0, borderTop: "1px solid #737373", borderLeft: "1px solid #737373" },
          { top: 0, right: 0, borderTop: "1px solid #737373", borderRight: "1px solid #737373" },
          { bottom: 0, left: 0, borderBottom: "1px solid #737373", borderLeft: "1px solid #737373" },
          { bottom: 0, right: 0, borderBottom: "1px solid #737373", borderRight: "1px solid #737373" },
        ].map((s, i) => (
          <div key={i} style={{ position: "absolute", width: 16, height: 16, ...s }} />
        ))}

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              color: "#383838",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            INITIATING CONTACT SEQUENCE //
          </div>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Get in Touch
          </h2>
        </div>

        {status === "sent" ? (
          <div style={{ textAlign: "center", padding: "32px 0" }}>
            <div style={{ fontSize: 12, color: "#56e370", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              ✓ Message sent
            </div>
            <div style={{ fontSize: 12, color: "#737373" }}>
              I&apos;ll get back to you soon.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={inputStyle}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="What are you working on?"
                />
              </div>

              {status === "error" && (
                <div style={{ fontSize: 11, color: "#ef4444", letterSpacing: "0.05em" }}>
                  Something went wrong. Try emailing directly at khemby.designs@gmail.com
                </div>
              )}

              <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    flex: 1,
                    background: "#fafafa",
                    color: "#0a0a0a",
                    border: "none",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "12px 24px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? 0.6 : 1,
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  style={{
                    background: "transparent",
                    color: "#737373",
                    border: "1px solid #383838",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "12px 20px",
                    cursor: "pointer",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 9,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#737373",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#111",
  border: "1px solid #383838",
  color: "#fafafa",
  fontSize: 12,
  padding: "10px 12px",
  fontFamily: "var(--font-geist-mono)",
  outline: "none",
  boxSizing: "border-box",
};
