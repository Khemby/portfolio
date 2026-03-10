const skillCategories = [
  { label: "Frontend", color: "#6284f7", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { label: "Backend", color: "#9b5cf6", skills: ["Node.js", "Express", "REST APIs", "Webhooks", "Prisma"] },
  { label: "AI & ML", color: "#f97316", skills: ["Claude / Claude Code", "OpenAI", "Gemini", "RAG Pipelines", "AI Agents", "n8n Workflows"] },
  { label: "Cloud & Infra", color: "#10b981", skills: ["AWS", "Google Cloud", "Docker", "Vercel", "CI/CD", "GitHub Actions"] },
  { label: "Databases", color: "#ec4899", skills: ["MongoDB", "Supabase", "PostgreSQL", "Prisma ORM"] },
  { label: "Auth & Payments", color: "#fbbf24", skills: ["Auth0", "Stripe", "OAuth 2.0", "JWT"] },
  { label: "Monitoring & Tools", color: "#38bdf8", skills: ["Sentry", "Amplitude", "GitHub", "Postman"] },
  { label: "Design & Prototyping", color: "#a78bfa", skills: ["Figma", "Unreal Engine 5", "UMG", "Design Systems"] },
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
    <section id="skills" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
      <div className="section">
        <div className="section-label">
          <span style={{ color: "#383838" }}>03 //</span> SKILLS
        </div>

        {/* Category grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 1,
            background: "#383838",
            border: "1px solid #383838",
            marginBottom: 1,
          }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              style={{
                background: "#0a0a0a",
                padding: "20px",
                borderTop: `3px solid ${cat.color}`,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: cat.color,
                  marginBottom: 14,
                  fontWeight: 700,
                }}
              >
                {cat.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership card */}
        <div
          style={{
            background: "#0a0a0a",
            border: "1px solid #383838",
            padding: "20px",
            borderTop: "3px solid #fafafa",
          }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#fafafa",
              marginBottom: 14,
              fontWeight: 700,
            }}
          >
            Leadership & Strategy
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {leadershipSkills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
