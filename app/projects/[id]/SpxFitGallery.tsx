"use client";

import Image from "next/image";

const SPXFIT_IMAGES = [
  { src: "/spxfit/MobilePCApp.png", alt: "SPXFit mobile and PC app view", caption: "Mobile & PC" },
  { src: "/spxfit/PCDisplay.gif", alt: "SPXFit configurator on desktop display", caption: "Configurator on desktop" },
  { src: "/spxfit/AppMobile.gif", alt: "SPXFit mobile app", caption: "Mobile app" },
  { src: "/spxfit/AppOnPC.png", alt: "SPXFit app on PC mockup", caption: "App on PC" },
  { src: "/spxfit/AppFigmaMockup.png", alt: "SPXFit Figma mockup", caption: "Figma mockup" },
  { src: "/spxfit/AppFutureMockup.png", alt: "SPXFit future concept mockup", caption: "Future concept mockup" },
  { src: "/spxfit/WireFrame1.png", alt: "SPXFit wireframe 1", caption: "Wireframe 1" },
  { src: "/spxfit/WireFrame2.png", alt: "SPXFit wireframe 2", caption: "Wireframe 2" },
];

export default function SpxFitGallery() {
  return (
    <div
      style={{
        marginBottom: 48,
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(13,13,15,0.6)",
      }}
    >
      <div
        style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontSize: 11,
          fontFamily: "var(--font-geist-mono)",
          fontWeight: 700,
          color: "#6284f7",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Project Showcase
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          padding: 24,
        }}
      >
        {SPXFIT_IMAGES.map((item) => (
          <figure
            key={item.src}
            style={{
              margin: 0,
              borderRadius: 12,
              overflow: "hidden",
              background: "rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/10",
                maxHeight: 420,
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 852px"
                style={{ objectFit: "contain" }}
                unoptimized={item.src.endsWith(".gif")}
              />
            </div>
            {item.caption && (
              <figcaption
                style={{
                  padding: "12px 16px",
                  fontSize: 13,
                  color: "#555",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}
