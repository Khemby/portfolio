"use client";

import Image from "next/image";

type GalleryItem =
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "video"; src: string; caption: string };

const LIFESPARKLABS_ITEMS: GalleryItem[] = [
  {
    type: "video",
    src: "https://res.cloudinary.com/ds7l2g2mo/video/upload/v1773191987/CurrentState_yatjmr.mp4",
    caption: "Full app preview",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/ds7l2g2mo/video/upload/v1773192019/LandingPage_d1p1bx.mp4",
    caption: "Landing page",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/ds7l2g2mo/video/upload/v1773192002/Admin_xxzsra.mp4",
    caption: "Admin dashboard",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/ds7l2g2mo/video/upload/v1773192105/Career_Sim_elijbb.mp4",
    caption: "Career simulation",
  },
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
        {LIFESPARKLABS_ITEMS.map((item) => (
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
              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  muted
                  playsInline
                  ref={(el) => {
                    if (el) el.playbackRate = 2.5;
                  }}
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    v.muted = true;
                    v.playbackRate = 2.5;
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 852px"
                  style={{ objectFit: "contain" }}
                />
              )}
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
