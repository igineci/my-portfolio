import type { Project } from "./types";

export const aiDashboards = {
  id: "ai-dashboards",
  year: "2025",
  image: "images/contact.svg",
  link: { href: "https://example.com/ai-dashboards", type: "external" },
  surfaces: ["home", "work"],
  stack: ["React", "TypeScript", "Data Viz", "Realtime UI"],
  responsibilities: ["dashboardDesign", "crossFunctional", "performance", "modularity"],
} as const satisfies Project;
