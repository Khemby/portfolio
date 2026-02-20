"use client";

import { useState, useRef } from "react";

interface Project {
  id: string;
  name: string;
  abbr: string;
  category: "Engineering" | "Design" | "Motion";
  color: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  portfolioUrl: string;
}

const projects: Project[] = [
  {
    id: "spxfit",
    name: "SPXFit Gym Configurator",
    abbr: "SPX",
    category: "Engineering",
    color: "#6284f7",
    tagline: "Web & Mobile Product Configurator",
    description:
      "A web and mobile configurator enabling users to design custom gym equipment using client-provided materials. Tackled performance challenges by switching from 8K to 4K WebP renders, achieving ~70% faster load times while maintaining full visual clarity at 150% zoom.",
    role: "Designer & Developer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "NextUI", "Blender", "Twinmotion", "Figma"],
    highlights: [
      "~70% faster load times via WebP compression and 4K render optimization",
      "Scalable segmented image rendering framework to avoid pre-rendering all color combinations",
      "Dynamic image merging for the equipment save feature",
      "Fully responsive across mobile and web browser platforms",
    ],
    liveUrl: "https://spxfit-equipment-configurator.netlify.app/",
    portfolioUrl: "https://kaitlynhemby.com/gym-equipment-configurator",
  },
  {
    id: "vortexeai",
    name: "VortexeAI",
    abbr: "VX",
    category: "Engineering",
    color: "#9b5cf6",
    tagline: "Low-Code AI Agent Pipeline Editor",
    description:
      "A browser-based low-code platform for designing, testing, and iterating on AI workflows. Empowers both technical and non-technical users to build multimodal AI agent pipelines with speed and precision through an intuitive drag-and-drop interface.",
    role: "Co-Founder — Product, Design & Development",
    technologies: ["React", "ReactFlow", "TypeScript", "Tailwind CSS", "Auth0", "Figma"],
    highlights: [
      "100+ user interviews to validate product-market fit before launch",
      "Visual pipeline editor for multimodal AI agent deployment",
      "Defined API contracts and frontend-to-ML integration logic for conditional agent behavior",
      "Full authentication system with Auth0 and Google integration",
    ],
    portfolioUrl: "https://kaitlynhemby.com/vortexeai",
  },
  {
    id: "aireal",
    name: "AIREAL",
    abbr: "AR",
    category: "Engineering",
    color: "#ec4899",
    tagline: "Augmented Reality Platform & Real-Time UI",
    description:
      "An AR platform enabling digital content to coexist with real-world environments. Built a flagship 100+ home community experience featuring real-time UI, CSV-based dynamic data management, interior walkthroughs, and a structural material customization system.",
    role: "UI/UX Technical Designer",
    technologies: ["Unreal Engine 5", "UMG", "Blueprints", "C++", "Figma", "CSV Data Systems"],
    highlights: [
      "10% user retention increase through A/B testing and iterative UX improvements",
      "Modular UI system reducing production time by 20%",
      "Real-time dynamic UI supporting 100+ individually customizable homes",
      "Dual navigation modes: aerial community view and first-person walkthrough",
    ],
    portfolioUrl: "https://kaitlynhemby.com/aireal",
  },
  {
    id: "dread",
    name: "Dread: Neon Relics",
    abbr: "DR",
    category: "Design",
    color: "#f97316",
    tagline: "Horror Sci-Fi Game UI/UX",
    description:
      "A horror sci-fi game UI/UX project for 'Rusted Haven' — a city on the brink of collapse where humanity and machine blur. What began as a UI showcase evolved into a full single-player game, with immersive HUD systems, motion UI, and full Unreal Engine 5 implementation.",
    role: "UI/UX Designer & Developer",
    technologies: ["Unreal Engine 5", "Blueprints", "Figma"],
    highlights: [
      "Comprehensive style guide and design system for a dark sci-fi aesthetic",
      "Xbox controller-optimized UI prototypes and interaction flows",
      "Motion-based interactive HUD systems in UE5",
      "Narrative-driven interface supporting full game world immersion",
    ],
    portfolioUrl: "https://kaitlynhemby.com/dread-neon-relics",
  },
  {
    id: "sage",
    name: "SAGE Collectibles",
    abbr: "SC",
    category: "Design",
    color: "#10b981",
    tagline: "Trading Card Design System & Print Production",
    description:
      "Designed 15+ product lines and 1,000+ trading cards annually at scale. Built a comprehensive multi-series design system, authored Python automation scripts to eliminate repetitive production tasks, and managed the complete print production pipeline from concept to delivery.",
    role: "Lead Graphic Designer",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Python", "Excel", "4-Color Print", "Foil Stamping"],
    highlights: [
      "20% sales increase through strategic product design optimization",
      "Python automation scripts significantly reducing per-card production time",
      "8 distinct card series — Five Star, Auto, Artistry, Next Level, Aspire, and more",
      "Foil stamping and spot color premium print production at volume",
    ],
    portfolioUrl: "https://kaitlynhemby.com/sagecollectiblesllc",
  },
  {
    id: "speedometer",
    name: "Sports Car Speedometer",
    abbr: "FUI",
    category: "Motion",
    color: "#38bdf8",
    tagline: "Futuristic Interface Motion Graphic",
    description:
      "A futuristic UI concept for a high-performance sports car dashboard, designed to prioritize critical driving data through intentional information hierarchy. Uses size, color, and spatial positioning to serve both casual drivers and enthusiasts without visual clutter.",
    role: "Motion Graphic Designer",
    technologies: ["After Effects", "Figma", "FUI Design"],
    highlights: [
      "Information hierarchy via size, color, and spatial positioning",
      "Four selectable driving modes with dynamic visual feedback",
      "Color-coded fuel and critical safety indicators",
      "Secondary display system using reduced visual weight for non-critical data",
    ],
    portfolioUrl: "https://kaitlynhemby.com/fui",
  },
  {
    id: "dna",
    name: "DNA Replication",
    abbr: "DNA",
    category: "Motion",
    color: "#fbbf24",
    tagline: "Scientific Visualization Motion Graphic",
    description:
      "A screen motion graphic visualizing the biological process of DNA replication through animation. A creative exploration of scientific data visualization, translating complex cellular mechanics into a clear, aesthetically compelling motion sequence.",
    role: "Motion Graphic Designer",
    technologies: ["After Effects", "Motion Design"],
    highlights: [
      "Scientific process translated into accessible motion narrative",
      "Precise timing and animation sequencing for biological accuracy",
      "Clean visual language distinguishing complex molecular components",
    ],
    portfolioUrl: "https://kaitlynhemby.com/dna-replication",
  },
];

const CATEGORIES = ["All", "Engineering", "Design", "Motion"] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 332, behavior: "smooth" });
  };

  return (
    <section id="projects">
      <div className="section">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>
              Projects
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
              Things I&apos;ve{" "}
              <span className="gradient-text">designed &amp; built.</span>
            </h2>
          </div>

          {/* Scroll arrows */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#888",
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#888",
                cursor: "pointer",
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div
          style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "7px 18px",
                borderRadius: 99,
                border: "1px solid",
                borderColor:
                  activeCategory === cat
                    ? "rgba(98,132,247,0.5)"
                    : "rgba(255,255,255,0.08)",
                background:
                  activeCategory === cat
                    ? "rgba(98,132,247,0.12)"
                    : "rgba(255,255,255,0.03)",
                color: activeCategory === cat ? "#6284f7" : "#555",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.04em",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: 4,
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="card"
              onClick={() => setSelectedProject(project)}
              style={{
                minWidth: 300,
                maxWidth: 300,
                scrollSnapAlign: "start",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Visual header */}
              <div
                style={{
                  height: 156,
                  background: `linear-gradient(135deg, ${project.color}1e 0%, ${project.color}08 100%)`,
                  borderBottom: `1px solid ${project.color}1e`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow orb */}
                <div
                  style={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: project.color,
                    filter: "blur(56px)",
                    opacity: 0.18,
                    pointerEvents: "none",
                  }}
                />
                {/* Abbr badge */}
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 15,
                    background: `linear-gradient(135deg, ${project.color}cc, ${project.color}55)`,
                    border: `1px solid ${project.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 800,
                    color: project.color,
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "-0.01em",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {project.abbr}
                </div>
                {/* Category badge */}
                <span
                  className="tag"
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    backgroundColor: `${project.color}18`,
                    border: `1px solid ${project.color}33`,
                    color: project.color,
                    fontSize: 10,
                    letterSpacing: "0.06em",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "20px 20px 18px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#f0f0f2",
                    letterSpacing: "-0.02em",
                    marginBottom: 5,
                    lineHeight: 1.3,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontSize: 11.5,
                    color: "#484848",
                    marginBottom: 16,
                    fontFamily: "var(--font-geist-mono)",
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {project.tagline}
                </p>

                {/* Tech pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 5,
                    marginBottom: 20,
                    flex: 1,
                    alignContent: "flex-start",
                  }}
                >
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#4a4a4a",
                        fontSize: 10,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span
                      className="tag"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "#4a4a4a",
                        fontSize: 10,
                      }}
                    >
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* View details */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: project.color,
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  View Details
                  <span style={{ fontSize: 14, lineHeight: 1 }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0d0d0f",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20,
              maxWidth: 680,
              width: "100%",
              maxHeight: "88vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            {/* Top accent bar */}
            <div
              style={{
                height: 4,
                background: `linear-gradient(90deg, ${selectedProject.color}, ${selectedProject.color}44)`,
                borderRadius: "20px 20px 0 0",
                flexShrink: 0,
              }}
            />

            <div style={{ padding: "32px 32px 36px" }}>
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#777",
                  cursor: "pointer",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ✕
              </button>

              {/* Project identity */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 13,
                    background: `linear-gradient(135deg, ${selectedProject.color}cc, ${selectedProject.color}55)`,
                    border: `1px solid ${selectedProject.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 800,
                    color: selectedProject.color,
                    fontFamily: "var(--font-geist-mono)",
                    flexShrink: 0,
                  }}
                >
                  {selectedProject.abbr}
                </div>
                <div>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#f0f0f2",
                      letterSpacing: "-0.03em",
                      lineHeight: 1.2,
                      marginBottom: 6,
                    }}
                  >
                    {selectedProject.name}
                  </h2>
                  <div
                    style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}
                  >
                    <span
                      className="tag"
                      style={{
                        backgroundColor: `${selectedProject.color}18`,
                        border: `1px solid ${selectedProject.color}33`,
                        color: selectedProject.color,
                        fontSize: 11,
                      }}
                    >
                      {selectedProject.category}
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        color: "#4a4a4a",
                        fontFamily: "var(--font-geist-mono)",
                      }}
                    >
                      {selectedProject.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="divider" style={{ marginBottom: 24 }} />

              {/* Description */}
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.8,
                  color: "#777",
                  marginBottom: 28,
                }}
              >
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 700,
                    color: "#3a3a3a",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: 14,
                  }}
                >
                  Key Highlights
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {selectedProject.highlights.map((h, i) => (
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
                          color: selectedProject.color,
                          flexShrink: 0,
                          fontSize: 11,
                          marginTop: 4,
                        }}
                      >
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: 700,
                    color: "#3a3a3a",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  Technologies
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                      style={{
                        backgroundColor: `${selectedProject.color}10`,
                        border: `1px solid ${selectedProject.color}26`,
                        color: selectedProject.color,
                        fontSize: 12,
                        padding: "4px 12px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 22px",
                      borderRadius: 9,
                      background: `linear-gradient(135deg, ${selectedProject.color}, ${selectedProject.color}99)`,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    View Live ↗
                  </a>
                )}
                <a
                  href={selectedProject.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 22px",
                    borderRadius: 9,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#999",
                    fontWeight: 600,
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Full Case Study ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
