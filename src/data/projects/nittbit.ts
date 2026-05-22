import type { Project } from "./types";

export const nittbit = {
  id: "nittbit",
  year: "2025",
  image: "images/fp/fp2.svg",
  link: { href: "https://example.com/nittbit-web-erp", type: "external" },
  surfaces: ["home", "work"],
  stack: ["React", "TypeScript", "SEO", "Integrations"],
  responsibilities: ["webDelivery", "erpIntegrations", "businessLogic", "scalability"],
} as const satisfies Project;
