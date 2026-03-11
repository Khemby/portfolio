"use client";

import { useRef } from "react";
import Link from "next/link";
import { projects } from "../data/projects";
import { EvervaultCard } from "./ui/EvervaultCard";
import CornerBrackets from "./ui/CornerBrackets";

export default function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <section id="featured" style={{ borderBottom: "1px solid #383838" }}>
      <div className="section" style={{ paddingTop: 24, paddingBottom: 24 }}>
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <div className="section-label" style={{ marginBottom: 0 }}>
            <span style={{ color: "#383838" }}>01 //</span> PROJECTS
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              style={{
                width: 32,
                height: 32,
                background: "transparent",
                border: "1px solid #383838",
                color: "#737373",
                cursor: "pointer",
                fontSize: 14,
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
                width: 32,
                height: 32,
                background: "transparent",
                border: "1px solid #383838",
                color: "#737373",
                cursor: "pointer",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative", padding: 4 }}>
          <CornerBrackets offset={4} />
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
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              style={{
                minWidth: 260,
                maxWidth: 260,
                scrollSnapAlign: "start",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                background: "#0a0a0a",
                borderLeft: `3px solid ${project.color}`,
              }}
            >
              {/* Preview */}
              <div style={{ height: 110, position: "relative", overflow: "hidden" }}>
                {project.previewImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.previewImage.src}
                    alt={project.previewImage.alt}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <EvervaultCard accentColor={project.color} abbr={project.abbr} className="h-full" />
                )}
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
                  {project.category}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fafafa",
                    letterSpacing: "-0.01em",
                    marginBottom: 4,
                  }}
                >
                  {project.name}
                </div>
                <div style={{ fontSize: 11, color: "#737373", lineHeight: 1.5, marginBottom: 12 }}>
                  {project.tagline}
                </div>
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
            </Link>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
