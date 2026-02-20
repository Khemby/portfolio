"use client";

const LIFESPARKLABS_VIDEOS = [
  { src: "/lifesparklabs/CurrentState.mp4", caption: "Platform demo (Current State)" },
  { src: "/lifesparklabs/PlatformDemo_V3.mp4", caption: "Platform demo (Legacy V2)" },
  { src: "/lifesparklabs/PlatformDemo_V1.mp4", caption: "Platform demo (Legacy V1)" },
  { src: "/lifesparklabs/V2_Tutorial.mp4", caption: "Prototype tutorial" },
  { src: "/lifesparklabs/CareerExplorer%20Lots%20Matches.mp4", caption: "Career Explorer — Lots Matches" },
  { src: "/lifesparklabs/Career%20Sim.mp4", caption: "Career simulation" },
];

export default function LifeSparkLabsGallery() {
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
          color: "#14b8a6",
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
          gap: 32,
          padding: 24,
        }}
      >
        {LIFESPARKLABS_VIDEOS.map((item) => (
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
                aspectRatio: "16/9",
                maxHeight: 420,
              }}
            >
              <video
                src={item.src}
                controls
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              >
                Your browser does not support the video tag.
              </video>
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
