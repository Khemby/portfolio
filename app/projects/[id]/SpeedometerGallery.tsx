"use client";

export default function SpeedometerGallery() {
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
          color: "#38bdf8",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Project Showcase
      </div>
      <div
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <figure
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
              src="/car_speed_odometer/SpeedOdometer.mp4"
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
          <figcaption
            style={{
              padding: "12px 16px",
              fontSize: 13,
              color: "#555",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Sports car speedometer motion graphic
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
