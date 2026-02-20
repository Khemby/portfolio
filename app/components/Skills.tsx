const skillCategories = [
  {
    label: "Frontend",
    color: "#6284f7",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Backend",
    color: "#9b5cf6",
    skills: ["Node.js", "Express", "REST APIs", "Webhooks", "Prisma"],
  },
  {
    label: "AI & ML",
    color: "#f97316",
    skills: [
      "Claude / Claude Code",
      "OpenAI",
      "Gemini",
      "RAG Pipelines",
      "AI Agents",
      "n8n Workflows",
    ],
  },
  {
    label: "Cloud & Infra",
    color: "#10b981",
    skills: ["AWS", "Google Cloud", "Docker", "Vercel", "CI/CD", "GitHub Actions"],
  },
  {
    label: "Databases",
    color: "#ec4899",
    skills: ["MongoDB", "Supabase", "PostgreSQL", "Prisma ORM"],
  },
  {
    label: "Auth & Payments",
    color: "#fbbf24",
    skills: ["Auth0", "Stripe", "OAuth 2.0", "JWT"],
  },
  {
    label: "Monitoring & Tools",
    color: "#38bdf8",
    skills: ["Sentry", "Amplitude", "GitHub", "Postman"],
  },
  {
    label: "Design & Prototyping",
    color: "#a78bfa",
    skills: ["Figma", "Unreal Engine 5", "UMG", "Design Systems"],
  },
];

const leadershipSkills = [
  "Technical Architecture Design",
  "Product Strategy",
  "Agile & Sprint Planning",
  "Cross-Functional Leadership",
  "System Architecture & Scalability",
  "QA & Testing Strategy",
  "Cost Optimization & Technical Forecasting",
  "UX Research & User Testing",
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            Technical Skills
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
            The tools I use to{" "}
            <span className="gradient-text">build and ship.</span>
          </h2>
        </div>

        {/* Technical skill grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 14,
            marginBottom: 48,
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="card"
              style={{ padding: "22px 22px 20px" }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 18,
                    borderRadius: 2,
                    backgroundColor: cat.color,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: cat.color,
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                    style={{
                      backgroundColor: `${cat.color}10`,
                      border: `1px solid ${cat.color}22`,
                      color: "#888",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & soft skills */}
        <div
          className="card"
          style={{ padding: "28px 28px 24px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 4,
                height: 18,
                borderRadius: 2,
                backgroundColor: "#6284f7",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#6284f7",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Leadership &amp; Strategy
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {leadershipSkills.map((skill) => (
              <span
                key={skill}
                className="tag"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#777",
                  padding: "5px 14px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
