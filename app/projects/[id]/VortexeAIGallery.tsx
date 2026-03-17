"use client";

import Image from "next/image";

const VORTEXEAI_IMAGES = [
  {
    src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773191533/preview.png",
    alt: "VortexeAI pipeline editor preview",
    caption: "Pipeline editor",
  },
];

export default function VortexeAIGallery() {
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
          color: "#9b5cf6",
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
        {VORTEXEAI_IMAGES.map((item) => (
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
