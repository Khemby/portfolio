import Link from "next/link";
import Nav from "../../components/Nav";

export default function ProjectNotFound() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          paddingTop: 120,
          paddingBottom: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 800,
            color: "#f0f0f2",
            marginBottom: 12,
          }}
        >
          Project not found
        </h1>
        <p style={{ fontSize: 15, color: "#666", marginBottom: 24 }}>
          This project doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "12px 24px",
            borderRadius: 10,
            background: "linear-gradient(135deg, #6284f7, #9b5cf6)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
          }}
        >
          ← Back to Projects
        </Link>
      </main>
    </>
  );
}
