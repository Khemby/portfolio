import Image from "next/image";
import CornerBrackets from "./ui/CornerBrackets";

const highlights = [
  {
    badge: "AI",
    color: "#f97316",
    title: "AI-First Builder",
    desc: "Managing AI-driven workflows and integrations with LLMs, RAG pipelines, and agents",
    tags: ["LLMs", "RAG", "Agents", "Claude Code", "OpenAI", "Gemini"],
  },
  {
    badge: "FS",
    color: "#6284f7",
    title: "Full-Stack Engineer",
    desc: "Building scalable full-stack applications with production-ready infrastructure",
    tags: ["Frontend", "Backend", "Database Design", "Cloud Hosting", "CI/CD", "Payment Processing", "Analytics"],
  },
  {
    badge: "TL",
    color: "#9b5cf6",
    title: "Technical Leader",
    desc: "Leading technical teams and driving technical execution",
    tags: ["Architecture", "Roadmaps", "Agile", "Sprint Planning", "Technical Documentation"],
  },
  {
    badge: "PM",
    color: "#10b981",
    title: "Product-Minded",
    desc: "Translating user needs into technical specifications and product strategy",
    tags: ["Strategy", "Specs", "User Research", "Product Roadmaps"],
  },
];

const experiences = [
  {
    company: "Self-Employed",
    role: "Software Engineer Contractor",
    period: "Mar 2026 — Present",
    location: "Remote / San Diego, CA",
    color: "#fafafa",
    bullets: [
      "Providing full-stack software engineering and technical consulting services to clients",
    ],
    tags: ["Consulting", "Full-Stack", "AI", "Next.js", "TypeScript", "Node.js", "Express", "REST APIs","Cloud Hosting", "CI/CD", "Payment Processing", "Analytics"],
  },
  {
    company: "LifeSpark Labs",
    role: "Co-Founder / CTO",
    period: "Mar 2025 — Mar 2026",
    location: "San Diego, CA",
    color: "#14b8a6",
    bullets: [
      "Led product strategy and full-stack architecture for an AI-powered job intelligence platform",
      "Drove 357 MAU during early-stage rollout and increased average session duration by 18% after redesigning feature structures.",
      "Integrated AI-assisted workflows to automate candidate matching and career coaching",
      "Led cross-functional teams of developers, designers, and AI interns using Agile sprint planning, established KPI frameworks, and implemented observability systems",
      "Achieved 25% DAU completion rate for core learning assets while reducing bounce rate by 3.5% through onboarding and landing page optimization.",
      "Directed patent-pending R&D for AI-driven behavioral intelligence and simulation technology, designing scalable AI workflows integrating generative models and personalization logic.",
    ],
    tags: ["MongoDB", "Next.js", "Node.js", "TypeScript", "AWS", "CI/CD", "Vercel", "AI", "Docker", "Sentry", "Amplitude"],
  },
  {
    company: "VortexeAI",
    role: "Co-Founder",
    period: "Jun 2024 — Nov 2025",
    location: "Remote, CA",
    color: "#9b5cf6",
    bullets: [
      "Conducted 100+ user interviews to validate product-market fit and refine value proposition prior to launch.",
      "Designed visual drag-and-drop pipeline editor for AI agent workflows",
      "Collaborated on backend schema for multi-agent orchestration and LLM integration.",
      "Built frontend-ML bridge for real-time inference and workflow execution",
    ],
    tags: ["React", "TypeScript", "API Design", "ML Integration"],
  },
  {
    company: "AIREAL",
    role: "UI/UX Technical Designer",
    period: "Feb 2024 — Aug 2024",
    location: "Remote, CA",
    color: "#ec4899",
    bullets: [
      "Improved user retention by 10% through modular UI system redesign",
      "Implemented real-time UI for a 100+ home community AR experience",
      "Designed a reusable modular UI system reducing production time by 20%.",
    ],
    tags: ["Unreal Engine 5", "UMG", "C++", "Figma", "A/B Testing"],
  },
  {
    company: "Overwhelming Studios",
    role: "UI/UX Designer",
    period: "Apr 2023 — Feb 2024",
    location: "Remote, CA",
    color: "#f97316",
    bullets: [
      "Increased player retention by 10% and satisfaction by 30% via HUD redesign",
      "Built UE5 motion UI prototypes for horror sci-fi game",
    ],
    tags: ["UE5", "Prototyping", "Motion UI", "HUD Design"],
  },
  {
    company: "SAGE Collectibles",
    role: "Lead Graphic Designer",
    period: "Jan 2019 — Feb 2024",
    location: "Carlsbad, CA",
    color: "#10b981",
    bullets: [
      "Managed 15+ product lines producing 1000+ trading cards annually",
      "Drove 20% sales increase through design system and Python automation",
    ],
    tags: ["Python", "Automation", "Design Systems", "Production Pipelines"],
  },
];

export default function AboutExperience() {
  return (
    <section id="about" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
      <div className="section">
        <div className="about-grid">
          {/* Left — About */}
          <div>
            <div className="section-label">
              <span style={{ color: "#383838" }}>02 //</span> ABOUT
            </div>

            {/* Headshot */}
            <div style={{ marginBottom: 32 }}>
              <Image
                src="/KaitlynHemby.png"
                alt="Kaitlyn Hemby"
                width={120}
                height={120}
                style={{ display: "block", border: "1px solid #383838", background: "#fafafa" }}
              />
            </div>

            <h2
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#fafafa",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Engineering platforms that scale and ship.
            </h2>

            <p style={{ fontSize: 13, color: "#a1a1a1", lineHeight: 1.8, marginBottom: 40 }}>
              5+ years as a Product and Technology Leader, building at the intersection of engineering,
              AI, and product strategy. From trading card automation to AI-powered platforms,
              I&apos;ve led technical teams, co-founded startups, and shipped products used by real people.
            </p>

            {/* Highlight cards */}
            <div className="highlight-grid">
              <CornerBrackets />
              {highlights.map((h) => (
                <div key={h.badge} style={{ background: "#0a0a0a", padding: "16px" }}>
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#0a0a0a",
                      background: h.color,
                      padding: "2px 6px",
                      marginBottom: 10,
                    }}
                  >
                    {h.badge}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#fafafa", marginBottom: 4 }}>
                    {h.title}
                  </div>
                  <div style={{ fontSize: 11, color: "#737373", lineHeight: 1.5, marginBottom: 10 }}>
                    {h.desc}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {h.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Experience */}
          <div id="experience">
            <div className="section-label">
              <span style={{ color: "#383838" }}>02 //</span> EXPERIENCE
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {experiences.map((exp, i) => (
                <div
                  key={exp.company}
                  style={{
                    borderLeft: `3px solid ${exp.color}`,
                    paddingLeft: 20,
                    paddingBottom: i < experiences.length - 1 ? 36 : 0,
                    marginLeft: 0,
                  }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: 4 }}>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#fafafa",
                        letterSpacing: "-0.01em",
                        marginBottom: 2,
                      }}
                    >
                      {exp.company}
                    </div>
                    <div style={{ fontSize: 12, color: exp.color, marginBottom: 2 }}>{exp.role}</div>
                    <div style={{ fontSize: 10, color: "#737373", letterSpacing: "0.04em", marginBottom: 12 }}>
                      {exp.period} · {exp.location}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul style={{ margin: "0 0 12px", padding: 0, listStyle: "none" }}>
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        style={{
                          fontSize: 12,
                          color: "#a1a1a1",
                          lineHeight: 1.6,
                          marginBottom: 6,
                          paddingLeft: 12,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: exp.color,
                          }}
                        >
                          —
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {exp.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
