import type { Project } from "./types";

export const uiLab = {
  id: "ui-lab",
  year: "2023",
  image: "images/atom.svg",
  link: { href: "/explorations", type: "internal" },
  surfaces: ["home"],
} as const satisfies Project;
