const experiences = [
  {
    company: "LifeSpark Labs",
    role: "Co-Founder / CTO",
    period: "Mar 2025 — Mar 2026",
    location: "San Diego, CA",
    accentColor: "#14b8a6",
    bullets: [
      "Led end-to-end product and technical strategy for an AI-powered gamified career platform, redefining the MVP, reframing the problem statement, and restructuring the engineering roadmap to improve execution efficiency.",
      "Architected full-stack infrastructure including MongoDB database design, Node.js backend services, AWS cloud environment, CI/CD pipelines, and Vercel frontend deployment to support scalable product growth.",
      "Directed patent-pending R&D for AI-driven behavioral intelligence and simulation technology, designing scalable AI workflows integrating generative models and personalization logic.",
      "Accelerated development velocity by implementing AI-assisted engineering workflows, completing core builds up to 2x faster and delivering the first MVP iteration in two weeks.",
      "Led cross-functional teams of developers, designers, and AI interns, overseeing sprint planning, QA processes, testing strategy, and technical documentation using Agile methodologies.",
      "Designed and validated product direction through 100+ user testing sessions using rapid Figma prototypes, translating insights into roadmap and feature prioritization decisions.",
      "Established KPI frameworks and conducted competitor analysis to align product, retention, and monetization strategy with measurable growth objectives.",
      "Implemented monitoring and observability systems using AWS CloudWatch and Sentry to ensure backend stability, performance optimization, and production reliability.",
    ],
    tags: ["MongoDB", "Node.js", "AWS", "CI/CD", "Vercel", "AI", "TypeScript", "Sentry"],
  },
  {
    company: "VortexeAI",
    role: "Co-Founder",
    period: "Jun 2024 — Nov 2025",
    location: "Remote, CA",
    accentColor: "#9b5cf6",
    bullets: [
      "Conducted 100+ user interviews to validate product-market fit and refine value proposition prior to launch.",
      "Designed visual pipeline interfaces for multimodal AI agent deployment.",
      "Collaborated on backend schema for agent orchestration and LLM integration.",
      "Defined frontend-to-ML bridge logic for conditional agent behavior rendering.",
      "Developed brand identity and landing page for early customer acquisition.",
    ],
    tags: ["React", "TypeScript", "API Design", "ML Integration"],
  },
  {
    company: "AIREAL",
    role: "UI/UX Technical Designer",
    period: "Feb 2024 — Aug 2024",
    location: "Remote, CA",
    accentColor: "#ec4899",
    bullets: [
      "Increased user retention by 10% through A/B testing and UX improvements.",
      "Designed a reusable modular UI system reducing production time by 20%.",
      "Built dynamic real-time UI systems supporting 100+ homes per community.",
      "Implemented UI assets into Unreal Engine 5 (UMG, Blueprints, C++ hooks).",
      "Authored technical documentation to improve development speed.",
    ],
    tags: ["Unreal Engine 5", "UMG", "C++", "Figma", "A/B Testing"],
  },
  {
    company: "Overwhelming Studios",
    role: "UI/UX Designer",
    period: "Apr 2023 — Feb 2024",
    location: "Remote, CA",
    accentColor: "#f97316",
    bullets: [
      "Improved player retention by 10% through iterative UX redesign.",
      "Increased overall player satisfaction by 30%.",
      "Designed interactive HUD systems and motion-based UI.",
      "Created prototypes and implemented UI in UE5.",
    ],
    tags: ["UE5", "Prototyping", "Motion UI", "HUD Design"],
  },
  {
    company: "SAGE Collectibles",
    role: "Lead Graphic Designer",
    period: "Jan 2019 — Feb 2024",
    location: "Carlsbad, CA",
    accentColor: "#10b981",
    bullets: [
      "Designed 15+ product lines and 1,000+ trading cards annually.",
      "Contributed to 20% increase in sales through product design optimization.",
      "Built Python automation scripts reducing repetitive workflow tasks.",
      "Optimized asset production pipelines and documentation systems.",
    ],
    tags: ["Python", "Automation", "Design Systems", "Production Pipelines"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            Work Experience
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
            Where I&apos;ve built{" "}
            <span className="gradient-text">things that matter.</span>
          </h2>
        </div>

        {/* Experience list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="card"
              style={{
                padding: "32px 32px 28px",
                borderLeft: `3px solid ${exp.accentColor}`,
                borderRadius: "0 16px 16px 0",
                position: "relative",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div>
                  {/* Company dot + name */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: exp.accentColor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        color: "#f0f0f2",
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "#777",
                      fontWeight: 500,
                      paddingLeft: 16,
                    }}
                  >
                    {exp.role}
                  </div>
                </div>

                {/* Period + location */}
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-geist-mono)",
                      color: "#555",
                      fontWeight: 500,
                      marginBottom: 3,
                    }}
                  >
                    {exp.period}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#444",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {exp.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      fontSize: 14,
                      color: "#666",
                      lineHeight: 1.65,
                    }}
                  >
                    <span
                      style={{
                        color: exp.accentColor,
                        flexShrink: 0,
                        marginTop: 2,
                        fontSize: 12,
                      }}
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      backgroundColor: `${exp.accentColor}12`,
                      border: `1px solid ${exp.accentColor}28`,
                      color: exp.accentColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
