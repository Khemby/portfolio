export interface Project {
  id: string;
  name: string;
  abbr: string;
  category: "Engineering" | "Design" | "Motion";
  color: string;
  tagline: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  portfolioUrl: string;
  /** Preview image path for the project card (e.g. /spxfit/PCDisplay.gif). Falls back to gradient if omitted. */
  previewImage?: {
    src: string;
    alt: string;
  };
}

export const projects: Project[] = [
  {
    id: "lifesparklabs",
    name: "LifeSpark Labs",
    abbr: "LSL",
    category: "Engineering",
    color: "#14b8a6",
    tagline: "AI-Powered Job Intelligence Platform",
    description:
      "Scaled from prototype to MVP in 2 weeks, driving 700+ early user visits and growing active users by 150%. Grew to 357 MAUs with an 18% increase in session duration and 25% DAU completion rate. Built end-to-end as sole technical lead — architecting infrastructure, backend services, LLM-native features, and frontend across MongoDB, Node.js, AWS, and Vercel.",
    role: "Co-Founder / CTO",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Redux", "Prisma", "MongoDB", "Auth0", "Stripe", "Figma", "Docker", "CI/CD", "GitHub Actions", "AWS"],
    highlights: [
      "700+ early user visits and 150% active user growth within weeks of launch",
      "357 monthly active users with 18% increase in average session duration",
      "25% DAU completion rate on core learning features; 3.5% bounce rate reduction through onboarding optimization",
      "Patent-pending R&D for AI-driven behavioral intelligence and simulation technology",
      "Shipped concept to production in 2 weeks as sole technical lead — no PM, designer, or architect",
    ],
    portfolioUrl: "https://kaitlynhemby.com/lifesparklabs",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773194519/preview_qvx8ic.png",
      alt: "LifeSpark Labs Preview",
    },
  },
  {
    id: "spxfit",
    name: "SPXFit Gym Configurator",
    abbr: "SPX",
    category: "Engineering",
    color: "#6284f7",
    tagline: "Web & Mobile Product Configurator",
    description:
      "Achieved ~70% faster load times by optimizing 8K renders down to 4K WebP while maintaining full visual clarity. Built a cross-platform product configurator enabling users to customize gym equipment in real time — designing the rendering architecture, image compositing system, and responsive UI from scratch.",
    role: "Designer & Developer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "NextUI", "Blender", "Twinmotion", "Figma"],
    highlights: [
      "~70% faster load times via WebP compression and 4K render optimization",
      "Eliminated need to pre-render all color combinations with a scalable segmented rendering framework",
      "Dynamic image compositing system for real-time equipment customization and save feature",
      "Fully responsive across mobile and desktop — designed and built end-to-end",
    ],
    portfolioUrl: "https://kaitlynhemby.com/gym-equipment-configurator",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773191733/AppOnPC_brwaz8.png",
      alt: "SPXFit Gym Configurator Preview",
    },
  },
  {
    id: "vortexeai",
    name: "VortexeAI",
    abbr: "VX",
    category: "Engineering",
    color: "#9b5cf6",
    tagline: "Low-Code AI Agent Pipeline Editor",
    description:
      "Validated product-market fit through 100+ user interviews before building a browser-based platform that lets non-technical users deploy multimodal AI agent workflows without writing code. Built the visual pipeline editor in React, designed the frontend-to-ML bridge layer, and collaborated on backend schema for multi-agent orchestration.",
    role: "Co-Founder — Product, Design & Development",
    technologies: ["React", "ReactFlow", "TypeScript", "Tailwind CSS", "Auth0", "Figma"],
    highlights: [
      "100+ user interviews conducted to validate product-market fit and refine value proposition",
      "Built visual drag-and-drop pipeline editor enabling no-code AI agent deployment",
      "Implemented frontend-to-ML bridge layer handling conditional agent behavior and real-time pipeline state",
      "Designed backend schema for multi-agent orchestration, prompt routing, and LLM integration",
    ],
    portfolioUrl: "https://kaitlynhemby.com/vortexeai",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773191533/preview.png",
      alt: "VortexeAI Preview",
    },
  },
  {
    id: "aireal",
    name: "AIREAL",
    abbr: "AR",
    category: "Engineering",
    color: "#ec4899",
    tagline: "Augmented Reality Platform & Real-Time UI",
    description:
      "Increased user retention by 10% through A/B testing and reduced production time by 20% with a reusable modular UI system. Built real-time dynamic interfaces in Unreal Engine 5 supporting 100+ individually customizable homes per community, with interior walkthroughs and material customization — all driven by CSV-based data management.",
    role: "UI/UX Technical Designer",
    technologies: ["Unreal Engine 5", "UMG", "Blueprints", "C++", "Figma", "CSV Data Systems"],
    highlights: [
      "10% user retention increase through A/B testing and iterative UX improvements",
      "20% reduction in production time via reusable modular UI component system",
      "Real-time dynamic UI supporting 100+ individually customizable homes per community",
      "Implemented UI assets into Unreal Engine 5 using UMG, Blueprints, and C++ hooks",
    ],
    portfolioUrl: "https://kaitlynhemby.com/aireal",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773192961/Screenshot_2024-07-07_121828_scksz4.png",
      alt: "AIREAL Preview",
    },
  },
  {
    id: "sage",
    name: "SAGE Collectibles",
    abbr: "SC",
    category: "Design",
    color: "#10b981",
    tagline: "Trading Card Design System & Print Production",
    description:
      "Drove a 20% increase in sales through product design optimization across 15+ product lines and 1,000+ trading cards annually. Built Python automation scripts saving 2 hours per week across the design team, and managed the complete print production pipeline from concept to delivery including foil stamping and spot color processes.",
    role: "Lead Graphic Designer",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Python", "Excel", "4-Color Print", "Foil Stamping"],
    highlights: [
      "20% increase in sales through strategic product design optimization across 15+ product lines",
      "Python automation scripts saving 2 hours/week across the design team",
      "1,000+ trading cards designed and produced annually across 8 distinct series",
      "Premium print production at volume — foil stamping, spot color, and 4-color process",
    ],
    portfolioUrl: "https://kaitlynhemby.com/sagecollectiblesllc",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773192884/card_lineup_yc3ysn.png",
      alt: "SAGE Collectibles Preview",
    },
  },
  {
    id: "speedometer",
    name: "Sports Car Speedometer",
    abbr: "FUI",
    category: "Motion",
    color: "#38bdf8",
    tagline: "Futuristic Interface Motion Graphic",
    description:
      "Generated 32K+ engagement on TikTok with a futuristic sports car dashboard concept. Designed a motion graphic prioritizing critical driving data through intentional information hierarchy — using size, color, and spatial positioning to serve both casual drivers and enthusiasts without visual clutter.",
    role: "Motion Graphic Designer",
    technologies: ["After Effects", "Figma", "FUI Design"],
    highlights: [
      "32K+ engagement on TikTok — viral reach for a personal design project",
      "Information hierarchy designed via size, color, and spatial positioning",
      "Four selectable driving modes with dynamic visual feedback",
      "Color-coded fuel and critical safety indicators with secondary display for non-critical data",
    ],
    portfolioUrl: "https://kaitlynhemby.com/fui",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773194624/Shot_fmui84.png",
      alt: "Sports Car Speedometer Preview",
    },
  },
];

export const CATEGORIES = ["All", "Engineering", "Design", "Motion"] as const;

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
