const highlights = [
  {
    badge: "AI",
    badgeColor: "#f97316",
    title: "AI-First Builder",
    description:
      "Designed and shipped AI-powered platforms using Claude, OpenAI, RAG pipelines, and n8n agent workflows — from architecture to production.",
    tag: "LLMs · RAG · Agents · n8n",
  },
  {
    badge: "FS",
    badgeColor: "#6284f7",
    title: "Full-Stack Engineer",
    description:
      "React, Next.js, Node.js, TypeScript, MongoDB, and Supabase — proficient from frontend interfaces to scalable REST APIs and backend infrastructure.",
    tag: "React · Node.js · TypeScript · AWS",
  },
  {
    badge: "TL",
    badgeColor: "#9b5cf6",
    title: "Technical Leader",
    description:
      "Led engineering as CTO and Co-Founder. Defined system architecture, sprint planning, and technical roadmaps while managing cross-functional teams.",
    tag: "Architecture · Roadmaps · Agile",
  },
  {
    badge: "PM",
    badgeColor: "#10b981",
    title: "Product-Minded",
    description:
      "100+ customer interviews translated into precise technical specifications. Bridges product strategy with engineering execution without losing either.",
    tag: "Strategy · Specs · User Research",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="section">
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>
            About Me
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#f0f0f2",
              lineHeight: 1.1,
              maxWidth: 640,
            }}
          >
            Engineering platforms that{" "}
            <span className="gradient-text">scale and ship.</span>
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: 16,
              lineHeight: 1.8,
              color: "#5a5a5a",
              maxWidth: 600,
            }}
          >
            Product and Technology Leader with 5+ years operating at the
            intersection of APIs, integrations, and product strategy. Strong
            background in defining technical requirements, writing specifications,
            prioritizing roadmaps, and partnering cross-functionally to deliver
            high-impact platform capabilities.
          </p>
        </div>

        {/* Highlight cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              className="card"
              style={{ padding: "28px 24px" }}
            >
              {/* Badge */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${h.badgeColor}cc, ${h.badgeColor}66)`,
                  border: `1px solid ${h.badgeColor}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  color: h.badgeColor,
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.02em",
                  marginBottom: 20,
                  flexShrink: 0,
                }}
              >
                {h.badge}
              </div>

              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f0f0f2",
                  marginBottom: 10,
                  letterSpacing: "-0.02em",
                }}
              >
                {h.title}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.7,
                  color: "#5a5a5a",
                  marginBottom: 20,
                }}
              >
                {h.description}
              </p>
              <span
                className="tag"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#555",
                  fontSize: 11,
                }}
              >
                {h.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
