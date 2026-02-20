const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Colorado Boulder",
    period: "Expected 2026",
    location: "Boulder, CO",
    color: "#6284f7",
    abbr: "CU",
  },
  {
    degree: "B.A. Multimedia Design & Photography",
    school: "San Diego State University",
    period: "2018",
    location: "San Diego, CA",
    color: "#ec4899",
    abbr: "SD",
    note: "Minor in Marketing",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section">
        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            Education
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#f0f0f2",
              lineHeight: 1.1,
            }}
          >
            Built on a{" "}
            <span className="gradient-text">strong foundation.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {education.map((edu) => (
            <div
              key={edu.school}
              className="card"
              style={{ padding: "32px 28px" }}
            >
              {/* School badge */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `linear-gradient(135deg, ${edu.color}cc, ${edu.color}55)`,
                  border: `1px solid ${edu.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 800,
                  color: edu.color,
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "-0.01em",
                  marginBottom: 24,
                }}
              >
                {edu.abbr}
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontFamily: "var(--font-geist-mono)",
                  color: "#555",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {edu.period}
              </div>

              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#f0f0f2",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  marginBottom: 8,
                }}
              >
                {edu.degree}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  marginBottom: edu.note ? 6 : 0,
                }}
              >
                {edu.school}
              </p>

              {edu.note && (
                <p style={{ fontSize: 13, color: "#444" }}>{edu.note}</p>
              )}

              <div
                style={{
                  marginTop: 20,
                  fontSize: 12,
                  fontFamily: "var(--font-geist-mono)",
                  color: "#3a3a3a",
                }}
              >
                {edu.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
