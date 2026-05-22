import type { Project } from "./types";

export const juratech = {
  id: "juratech",
  year: "2024",
  image: "images/lj.jpg",
  link: {
    href: "mailto:andjeladjek@gmail.com?subject=LjubenkovicERP%20-%20more%20info",
    type: "mailto",
  },
  ctaKey: "askMore",
  surfaces: ["home", "work"],
  stack: [
    "Angular 20",
    "TypeScript",
    ".NET 7",
    "REST API",
    "RxJS",
    "Unit Testing",
    "Avalonia UI (desktop)",
  ],
  responsibilities: [
    "soloFrontend",
    "legacyMigration",
    "architecture",
    "stateManagement",
    "apiIntegration",
    "techOnboarding",
    "documentation",
    "unitTesting",
  ],
  highlights: [
    { icon: "⏱", key: "delivery" },
    { icon: "👤", key: "solo" },
    { icon: "🔄", key: "migration" },
    { icon: "🤝", key: "onboarding" },
    { icon: "🧪", key: "testing" },
  ],
  startDate: "Oct 2025",
  endDate: "Jun 2026",
  status: "production",
  aiUsage: true,
} as const satisfies Project;
