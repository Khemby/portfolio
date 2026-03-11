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
      "A career exploration and simulation platform helping users discover career matches and experience role-based scenarios. Features platform demos, tutorials, and interactive career simulation experiences.",
    role: "Co-Founder / CTO",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Redux", "Prisma", "MongoDB", "Auth0", "Stripe", "Figma", "Docker", "CI/CD", "GitHub Actions", "AWS"],
    highlights: [
      "Led product strategy and technical execution for an AI-powered platform serving early-career professionals, operating as both technical architect and product owner.",
      "Designed and implemented REST APIs and webhook-based workflows for subscription management, authentication, and user lifecycle transitions.",
      "Authored technical specifications and collaborated with cross-functional teams to deliver modular, scalable platform capabilities.",
      "Structured backend systems to support evolving AI-driven recommendation and scoring engines.",
      "Designed modular data models to support versioned assessments and behavioral scoring across large user datasets.",
    ],
    liveUrl: "https://lifesparklabs.com/",
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
      "A web and mobile configurator enabling users to design custom gym equipment using client-provided materials. Tackled performance challenges by switching from 8K to 4K WebP renders, achieving ~70% faster load times while maintaining full visual clarity at 150% zoom.",
    role: "Designer & Developer",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "NextUI", "Blender", "Twinmotion", "Figma"],
    highlights: [
      "~70% faster load times via WebP compression and 4K render optimization",
      "Scalable segmented image rendering framework to avoid pre-rendering all color combinations",
      "Dynamic image merging for the equipment save feature",
      "Fully responsive across mobile and web browser platforms",
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
      "A browser-based low-code platform for designing, testing, and iterating on AI workflows. Empowers both technical and non-technical users to build multimodal AI agent pipelines with speed and precision through an intuitive drag-and-drop interface.",
    role: "Co-Founder — Product, Design & Development",
    technologies: ["React", "ReactFlow", "TypeScript", "Tailwind CSS", "Auth0", "Figma"],
    highlights: [
      "100+ user interviews to validate product-market fit before launch",
      "Visual pipeline editor for multimodal AI agent deployment",
      "Defined API contracts and frontend-to-ML integration logic for conditional agent behavior",
      "Full authentication system with Auth0 and Google integration",
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
      "An AR platform enabling digital content to coexist with real-world environments. Built a flagship 100+ home community experience featuring real-time UI, CSV-based dynamic data management, interior walkthroughs, and a structural material customization system.",
    role: "UI/UX Technical Designer",
    technologies: ["Unreal Engine 5", "UMG", "Blueprints", "C++", "Figma", "CSV Data Systems"],
    highlights: [
      "10% user retention increase through A/B testing and iterative UX improvements",
      "Modular UI system reducing production time by 20%",
      "Real-time dynamic UI supporting 100+ individually customizable homes",
      "Dual navigation modes: aerial community view and first-person walkthrough",
    ],
    portfolioUrl: "https://kaitlynhemby.com/aireal",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773192961/Screenshot_2024-07-07_121828_scksz4.png",
      alt: "AIREAL Preview",
    },
  },
  {
    id: "dread",
    name: "Dread: Neon Relics",
    abbr: "DR",
    category: "Design",
    color: "#f97316",
    tagline: "Horror Sci-Fi Game UI/UX",
    description:
      "A horror sci-fi game UI/UX project for 'Rusted Haven' — a city on the brink of collapse where humanity and machine blur. What began as a UI showcase evolved into a full single-player game, with immersive HUD systems, motion UI, and full Unreal Engine 5 implementation.",
    role: "UI/UX Designer & Developer",
    technologies: ["Unreal Engine 5", "Blueprints", "Figma"],
    highlights: [
      "Comprehensive style guide and design system for a dark sci-fi aesthetic",
      "Xbox controller-optimized UI prototypes and interaction flows",
      "Motion-based interactive HUD systems in UE5",
      "Narrative-driven interface supporting full game world immersion",
    ],
    portfolioUrl: "https://kaitlynhemby.com/dread-neon-relics",
    previewImage: {
      src: "https://res.cloudinary.com/ds7l2g2mo/image/upload/v1773192961/Screenshot_2024-07-07_121828_scksz4.png",
      alt: "Dread: Neon Relics Preview",
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
      "Designed 15+ product lines and 1,000+ trading cards annually at scale. Built a comprehensive multi-series design system, authored Python automation scripts to eliminate repetitive production tasks, and managed the complete print production pipeline from concept to delivery.",
    role: "Lead Graphic Designer",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Python", "Excel", "4-Color Print", "Foil Stamping"],
    highlights: [
      "20% sales increase through strategic product design optimization",
      "Python automation scripts significantly reducing per-card production time",
      "8 distinct card series — Five Star, Auto, Artistry, Next Level, Aspire, and more",
      "Foil stamping and spot color premium print production at volume",
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
      "A futuristic UI concept for a high-performance sports car dashboard, designed to prioritize critical driving data through intentional information hierarchy. Uses size, color, and spatial positioning to serve both casual drivers and enthusiasts without visual clutter.",
    role: "Motion Graphic Designer",
    technologies: ["After Effects", "Figma", "FUI Design"],
    highlights: [
      "32k+ engagement on TikTok with this motion graphic",
      "Information hierarchy via size, color, and spatial positioning",
      "Four selectable driving modes with dynamic visual feedback",
      "Color-coded fuel and critical safety indicators",
      "Secondary display system using reduced visual weight for non-critical data",
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
