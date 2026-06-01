import type { Project } from "./types";

export const unicam = {
  id: "unicam",
  year: "2025",
  image: "images/w4.png",
  link: { href: "https://unicam.app/", type: "external" },
  ctaKey: "openWebsite",
  surfaces: ["work"],
  stack: [
    "React",
    "TypeScript",
    "Shadcn UI",
    "Tailwind CSS",
    "Responsive Design",
    "SEO",
    "UX Design",
  ],
  responsibilities: [
    "uiUxDesign",
    "componentArchitecture",
    "scalableCodebase",
    "brandTranslation",
  ],
  highlights: [
    { icon: "🎥", key: "ecosystem" },
    { icon: "🤖", key: "ai" },
    { icon: "📱", key: "crossPlatform" },
    { icon: "🔍", key: "seo" },
  ],
  startDate: "2024",
  endDate: "Ongoing",
  status: "live",
  aiUsage: true,
} as const satisfies Project;
