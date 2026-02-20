export default function Contact() {
  return (
    <footer>
      {/* CTA section */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Background orbs */}
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background: "#6284f7",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.07,
          }}
        />

        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "96px 24px 80px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <div className="section-label" style={{ marginBottom: 20 }}>
            Get in Touch
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#f0f0f2",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Let&apos;s build something
            <br />
            <span className="gradient-text">remarkable together.</span>
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "#555",
              lineHeight: 1.75,
              maxWidth: 480,
              margin: "0 auto 48px",
            }}
          >
            Open to Software Engineer and Technical Leader roles. I bring both
            the architecture thinking and the hands-on execution to ship
            production-grade systems.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 64,
            }}
          >
            <a
              href="mailto:khembyone@yahoo.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 10,
                background: "linear-gradient(135deg, #6284f7, #9b5cf6)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              khembyone@yahoo.com
            </a>
            <a
              href="https://www.linkedin.com/in/kaitlyn-hemby"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 32px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ccc",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Footer bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "linear-gradient(135deg, #6284f7, #9b5cf6)",
                  borderRadius: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                KH
              </div>
              <span
                style={{ fontSize: 13, color: "#444", fontWeight: 500 }}
              >
                Kaitlyn Hemby
              </span>
            </div>

            <div style={{ display: "flex", gap: 24 }}>
              {[
                ["LinkedIn", "https://www.linkedin.com/in/kaitlyn-hemby"],
                ["kaitlynhemby.com", "https://kaitlynhemby.com"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="hover-link"
                  style={{ fontSize: 12, fontFamily: "var(--font-geist-mono)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
