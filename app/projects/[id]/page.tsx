import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import { getProjectById } from "../../data/projects";
import SpxFitGallery from "./SpxFitGallery";
import SpeedometerGallery from "./SpeedometerGallery";
import LifeSparkLabsGallery from "./LifeSparkLabsGallery";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project | Kaitlyn Hemby" };
  return { title: `${project.name} | Kaitlyn Hemby` };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const isSpxFit = id === "spxfit";
  const isSpeedometer = id === "speedometer";
  const isLifeSparkLabs = id === "lifesparklabs";

  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: 80,
          paddingBottom: 80,
        }}
      >
        <div
          className="section"
          style={{
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {/* Back link */}
          <Link
            href="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "#666",
              textDecoration: "none",
              marginBottom: 32,
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            ← Back to Projects
          </Link>

          {/* Project header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 20,
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: `linear-gradient(135deg, ${project.color}cc, ${project.color}55)`,
                border: `1px solid ${project.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                fontWeight: 800,
                color: project.color,
                fontFamily: "var(--font-geist-mono)",
                flexShrink: 0,
              }}
            >
              {project.abbr}
            </div>
            <div>
              <h1
                style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: 800,
                  color: "#f0f0f2",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                {project.name}
              </h1>
              <p
                style={{
                  fontSize: 16,
                  color: "#777",
                  marginBottom: 12,
                }}
              >
                {project.tagline}
              </p>
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <span
                  className="tag"
                  style={{
                    backgroundColor: `${project.color}18`,
                    border: `1px solid ${project.color}33`,
                    color: project.color,
                    fontSize: 11,
                  }}
                >
                  {project.category}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "#4a4a4a",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  {project.role}
                </span>
              </div>
            </div>
          </div>

          {/* SpxFit: custom gallery section using /spxfit images */}
          {isSpxFit && <SpxFitGallery />}

          {/* Sports Car Speedometer: showcase video from /car_speed_odometer */}
          {isSpeedometer && <SpeedometerGallery />}

          {/* LifeSpark Labs: showcase videos from /lifesparklabs */}
          {isLifeSparkLabs && <LifeSparkLabsGallery />}

          <div className="divider" style={{ margin: "40px 0" }} />

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.8,
              color: "#888",
              marginBottom: 32,
            }}
          >
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 700,
                color: "#3a3a3a",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Key Highlights
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: 15,
                    color: "#777",
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      color: project.color,
                      flexShrink: 0,
                      fontSize: 12,
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
          <div style={{ marginBottom: 32 }}>
            <h3
              style={{
                fontSize: 11,
                fontFamily: "var(--font-geist-mono)",
                fontWeight: 700,
                color: "#3a3a3a",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Technologies
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="tag"
                  style={{
                    background: "#1a1a1a",
                    border: `1px solid ${project.color}44`,
                    color: project.color,
                    fontSize: 13,
                    padding: "6px 14px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* View Live — only when project has liveUrl */}
          {project.liveUrl && (
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 10,
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                View Live ↗
              </a>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
