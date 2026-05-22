import type { Project } from "./types";

export const seoPipelines = {
  id: "seo-pipelines",
  year: "2024",
  image: "images/fp/fp1.svg",
  link: { href: "https://example.com/seo-pipelines", type: "external" },
  surfaces: ["home", "work"],
  stack: ["SEO", "Content Pipelines", "Automation", "Analytics"],
  responsibilities: ["technicalSeo", "automation", "contentSystems", "measurement"],
} as const satisfies Project;
