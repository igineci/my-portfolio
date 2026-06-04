import type { CaseStudySectionConfig } from "../../../components/case-studies/types";

export const caseStudySections: CaseStudySectionConfig[] = [
  {
    id: "overlap",
    titleKey: "studyOverlap",
    titleDefault: "STUDY OF OVERLAP",
    items: [
      {
        id: "overlap-1",
        caption: "transform: rotate() + translate()",
        size: "square",
        modal: {
          copyKey: "overlap1Modal",
          snippet: "transform: rotate(var(--d)) translate(var(--orbit));",
        },
      },
      {
        id: "overlap-2",
        caption: "position: absolute",
        size: "square",
        modal: {
          copyKey: "overlap2Modal",
          snippet:
            "left: calc(var(--r) + var(--orbit) * 0.866);\ntop: calc(var(--r) - var(--orbit) * 0.5);",
        },
      },
      {
        id: "overlap-3",
        caption: "grid-area: 1 / 1",
        size: "square",
        modal: {
          copyKey: "overlap3Modal",
          snippet:
            "grid-area: 1 / 1;\ntransform: rotate(var(--d)) translate(var(--orbit));",
        },
      },
      {
        id: "overlap-4",
        caption: "wrapper rotate() + translateY()",
        size: "square",
        modal: {
          copyKey: "overlap4Modal",
          snippet:
            "/* parent */ transform: rotate(var(--d));\n/* child  */ transform: translateY(calc(var(--orbit) * -1));",
        },
      },
    ],
  },
  {
    id: "shapes",
    titleKey: "studyShapes",
    titleDefault: "STUDY OF CSS SHAPES",
    items: [
      {
        id: "shapes-1",
        caption: "shape-outside: circle()",
        size: "rect",
        modal: { copyKey: "shapes1Modal" },
      },
      {
        id: "shapes-2",
        caption: "shape-outside: ellipse()",
        size: "rect",
        modal: { copyKey: "shapes2Modal" },
      },
      {
        id: "shapes-3",
        caption: "shape-outside: polygon()",
        size: "rect",
        modal: { copyKey: "shapes3Modal" },
      },
      {
        id: "shapes-4",
        caption: "shape-outside: url()",
        size: "portrait",
        modal: { copyKey: "shapes4Modal" },
      },
    ],
  },
  {
    id: "rotation",
    titleKey: "studyRotation",
    titleDefault: "STUDY OF ROTATION",
    items: [
      {
        id: "rotation-1",
        caption: "transform: rotate()",
        size: "square",
        modal: { copyKey: "rotation1Modal" },
      },
      {
        id: "rotation-2",
        caption: "transform-origin",
        size: "square",
        modal: { copyKey: "rotation2Modal" },
      },
      {
        id: "rotation-3",
        caption: "rotate3d()",
        size: "square",
        modal: { copyKey: "rotation3Modal" },
      },
      {
        id: "rotation-4",
        caption: "@keyframes rotate",
        size: "square",
        modal: { copyKey: "rotation4Modal" },
      },
    ],
  },
];
