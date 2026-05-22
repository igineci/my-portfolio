import type { Project } from "./types";

export const cer = {
  id: "cer",
  year: "2023",
  image: "images/cer/cer.png",
  link: { href: "https://github.com/igineci/cer", type: "external" },
  ctaKey: "openCase",
  surfaces: ["home", "work"],
  stack: [
    "Java 17",
    "PostgreSQL",
    "JDBC",
    "SOAP",
    "Jakarta XML Bind",
    "Apache HttpClient",
    "Apache Commons CLI",
    "CRON",
  ],
  highlights: [
    { icon: "🧮", key: "algorithm" },
    { icon: "🏦", key: "nbs" },
    { icon: "⏰", key: "scheduler" },
    { icon: "💾", key: "persistence" },
    { icon: "🔌", key: "erp" },
  ],
  startDate: "2023",
  endDate: "2023",
  status: "production",
  aiUsage: false,
} as const satisfies Project;
