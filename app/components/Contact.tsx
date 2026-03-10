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
