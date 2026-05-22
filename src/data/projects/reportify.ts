import type { Project } from "./types";

export const reportify = {
  id: "reportify",
  year: "2024",
  image: "images/reportify/reportify.jpg",
  link: { href: "https://github.com/igineci/reportify", type: "external" },
  ctaKey: "openCase",
  surfaces: ["home", "work"],
  stack: [
    "Java",
    "PostgreSQL",
    "JDBC",
    "Gson (JSON)",
    "Apache HttpClient",
    "REST API",
    "Apache Commons CLI",
    "Maven",
  ],
  highlights: [
    { icon: "📊", key: "reports" },
    { icon: "🗄️", key: "database" },
    { icon: "📦", key: "json" },
    { icon: "🌐", key: "api" },
    { icon: "⚙️", key: "cli" },
  ],
  startDate: "2024",
  endDate: "2024",
  status: "production",
  aiUsage: false,
} as const satisfies Project;
