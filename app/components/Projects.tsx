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
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="card"
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
              }}
            >
              {/* Visual header: preview image or gradient */}
              <div
                style={{
                  height: 156,
                  width: "100%",
                  background: project.previewImage
                    ? "#0d0d0f"
                    : `linear-gradient(135deg, ${project.color}1e 0%, ${project.color}08 100%)`,
                  borderBottom: `1px solid ${project.color}1e`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {project.previewImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.previewImage}
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                {!project.previewImage && (
                  <>
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
                  </>
                )}
                {/* Category badge (always on top) */}
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
                    zIndex: 2,
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
                        backgroundColor: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#a0a0a0",
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
                        backgroundColor: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#a0a0a0",
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
