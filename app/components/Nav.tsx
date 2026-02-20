export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(7,7,8,0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg, #6284f7, #9b5cf6)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 700,
              color: "white",
              fontFamily: "var(--font-geist-mono)",
              flexShrink: 0,
              letterSpacing: "-0.02em",
            }}
          >
            KH
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#e8e8e8",
              letterSpacing: "-0.01em",
            }}
          >
            Kaitlyn Hemby
          </span>
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                fontSize: 13,
                fontWeight: 500,
                padding: "6px 12px",
                borderRadius: 8,
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:khembyone@yahoo.com"
            style={{
              marginLeft: 10,
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              background: "linear-gradient(135deg, #6284f7, #9b5cf6)",
              padding: "7px 18px",
              borderRadius: 8,
              textDecoration: "none",
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
