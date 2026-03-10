import { EvervaultCard } from "./ui/EvervaultCard";
import { projects } from "../data/projects";
import CornerBrackets from "./ui/CornerBrackets";

// Top 3 projects to feature — IDs must match app/data/projects.ts exactly
const FEATURED_IDS = ["lifesparklabs", "vortexeai", "spxfit"];

export default function FeaturedProjects() {
  const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);
  const [main, ...rest] = featured;

  return (
    <section id="featured" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
      <div className="section" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-label">
          <span style={{ color: "#383838" }}>01 //</span> FEATURED PROJECTS
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gridTemplateRows: "auto",
            gap: 1,
            background: "#383838",
            border: "1px solid #383838",
            position: "relative",
          }}
        >
          <CornerBrackets />
          {/* Main large card */}
          {main && (
            <a
              href={main.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#0a0a0a",
                textDecoration: "none",
                color: "inherit",
                gridRow: "1 / 3",
              }}
            >
              {/* Preview area */}
              <div style={{ height: 220, borderLeft: `3px solid ${main.color}`, position: "relative" }}>
                <EvervaultCard accentColor={main.color} abbr={main.abbr} className="h-full" />
              </div>
              {/* Card body */}
              <div style={{ padding: "20px 24px", borderTop: "1px solid #383838" }}>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: main.color,
                    marginBottom: 8,
                  }}
                >
                  Featured · 01 · {main.category}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#fafafa",
                    letterSpacing: "-0.02em",
                    marginBottom: 6,
                  }}
                >
                  {main.name}
                </div>
                <div style={{ fontSize: 12, color: "#737373", marginBottom: 4 }}>{main.role}</div>
                <div style={{ fontSize: 12, color: "#a1a1a1", lineHeight: 1.6, marginBottom: 14 }}>
                  {main.tagline}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
                  {main.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {main.technologies.length > 5 && (
                    <span className="tag">+{main.technologies.length - 5}</span>
                  )}
                </div>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: main.color,
                  }}
                >
                  View Project →
                </span>
              </div>
            </a>
          )}

          {/* Small cards */}
          {rest.map((project, i) => (
            <a
              key={project.id}
              href={project.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#0a0a0a",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Preview area */}
              <div style={{ height: 110, borderLeft: `3px solid ${project.color}`, position: "relative" }}>
                <EvervaultCard accentColor={project.color} abbr={project.abbr} className="h-full" />
              </div>
              {/* Card body */}
              <div style={{ padding: "14px 16px", borderTop: "1px solid #383838" }}>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: project.color,
                    marginBottom: 6,
                  }}
                >
                  Featured · 0{i + 2}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fafafa",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}
                >
                  {project.name}
                </div>
                <div style={{ fontSize: 11, color: "#737373", marginBottom: 10 }}>{project.tagline}</div>
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: project.color,
                  }}
                >
                  View →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div style={{ marginTop: 24, textAlign: "right" }}>
          <a
            href="#projects"
            style={{
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#737373",
            }}
            className="hover-link"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
