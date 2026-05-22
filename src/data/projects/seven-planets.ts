import type { Project } from "./types";

export const sevenPlanets = {
  id: "seven-planets",
  year: "2024",
  image: "images/reportify/5.svg",
  link: { href: "https://example.com/7planets-video", type: "external" },
  surfaces: ["home", "work"],
  stack: ["Web Performance", "Media Delivery", "Frontend Profiling"],
  responsibilities: ["videoOptimization", "deliveryStrategy", "performanceBudget", "experience"],
} as const satisfies Project;
