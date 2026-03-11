"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { projects, CATEGORIES } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 332, behavior: "smooth" });
  };

  return (
    <section id="projects" style={{ background: "#0a0a0a", borderBottom: "1px solid #383838" }}>
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
            <div className="section-label">
              <span style={{ color: "#383838" }}>04 //</span> ALL PROJECTS
            </div>
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#fafafa",
                lineHeight: 1.1,
              }}
            >
              Things I&apos;ve designed &amp; built.
            </h2>
          </div>

          {/* Scroll arrows */}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              style={{
                width: 36,
                height: 36,
                background: "transparent",
                border: "1px solid #383838",
                color: "#737373",
                cursor: "pointer",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              style={{
                width: 36,
                height: 36,
                background: "transparent",
                border: "1px solid #383838",
                color: "#737373",
                cursor: "pointer",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Category filter tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 32, borderBottom: "1px solid #383838" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                border: "none",
                background: "transparent",
                color: activeCategory === cat ? "#fafafa" : "#737373",
                fontSize: 11,
                fontWeight: activeCategory === cat ? 700 : 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-geist-mono)",
                borderBottom: activeCategory === cat ? "2px solid #fafafa" : "2px solid transparent",
                marginBottom: -1,
                transition: "color 0.2s",
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
            background: "transparent",
          }}
        >
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              style={{
                minWidth: 300,
                maxWidth: 300,
                scrollSnapAlign: "start",
                cursor: "pointer",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                textDecoration: "none",
                background: "#0a0a0a",
                borderLeft: `3px solid ${project.color}`,
              }}
            >
              {/* Preview area */}
              <div
                style={{
                  height: 140,
                  width: "100%",
                  background: project.previewImage
                    ? "#0a0a0a"
                    : `${project.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                  borderBottom: "1px solid #383838",
                }}
              >
                {project.previewImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.previewImage}
                    alt={project.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: project.color,
                      opacity: 0.3,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.abbr}
                  </div>
                )}
                {/* Category badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: project.color,
                    fontFamily: "var(--font-geist-mono)",
                    zIndex: 2,
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "16px 18px 16px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fafafa",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {project.name}
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    color: "#737373",
                    marginBottom: 14,
                    letterSpacing: "0.01em",
                    lineHeight: 1.5,
                  }}
                >
                  {project.tagline}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                    marginBottom: 16,
                    flex: 1,
                    alignContent: "flex-start",
                  }}
                >
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: project.color,
                  }}
                >
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
