import type { Project } from "./types";

export const gnos = {
  id: "gnos",
  year: "2025",
  image: "images/gnosrecords.png",
  link: { href: "https://gnosrecords.com", type: "external" },
  ctaKey: "openWebsite",
  surfaces: ["home", "work"],
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "CSS",
    "Responsive Design",
    "UX Design",
  ],
  responsibilities: [
    "soloDeveloper",
    "uiUxDesign",
    "componentArchitecture",
    "scalableCodebase",
    "ongoingMaintenance",
    "brandTranslation",
  ],
  highlights: [
    { icon: "🎨", key: "design" },
    { icon: "👤", key: "solo" },
    { icon: "📐", key: "scale" },
    { icon: "🎯", key: "ux" }
  ],
  startDate: "Jan 2025",
  endDate: "Ongoing",
  status: "live",
  aiUsage: true,
} as const satisfies Project;
