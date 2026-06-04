import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import CaseStudy from "../../../components/case-studies/case-study";
import CaseStudyModal from "../../../components/case-studies/case-study-modal";
import CaseStudyPlaceholder from "../../../components/case-studies/placeholder";
import CaseStudySection from "../../../components/case-studies/section";
import type { ActiveStudy } from "../../../components/case-studies/types";
import { caseStudySections } from "./data";
import SeedAbsolute from "./studies/overlap/seed-absolute";
import SeedArms from "./studies/overlap/seed-arms";
import SeedGrid from "./studies/overlap/seed-grid";
import SeedTransform from "./studies/overlap/seed-transform";
import type { SeedDemoScale } from "./studies/overlap/types";
import ShapeCircle from "./studies/shapes/shape-circle";
import ShapeEllipse from "./studies/shapes/shape-ellipse";
import ShapePolygon from "./studies/shapes/shape-polygon";
import ShapeUrl from "./studies/shapes/shape-url";
import type { ShapeDemoScale } from "./studies/shapes/types";
import RotateBurst from "./studies/rotation/rotate-burst";
import RotateOrigin from "./studies/rotation/rotate-origin";
import RotateSweep from "./studies/rotation/rotate-sweep";
import RotateTilt from "./studies/rotation/rotate-tilt";
import type { RotationDemoScale } from "./studies/rotation/types";

function renderOverlapDemo(itemId: string, scale: SeedDemoScale): ReactNode {
  switch (itemId) {
    case "overlap-1":
      return <SeedTransform scale={scale} />;
    case "overlap-2":
      return <SeedAbsolute scale={scale} />;
    case "overlap-3":
      return <SeedGrid scale={scale} />;
    case "overlap-4":
      return <SeedArms scale={scale} />;
    default:
      return null;
  }
}

function renderShapesDemo(itemId: string, scale: ShapeDemoScale): ReactNode {
  switch (itemId) {
    case "shapes-1":
      return <ShapeCircle scale={scale} />;
    case "shapes-2":
      return <ShapeEllipse scale={scale} />;
    case "shapes-3":
      return <ShapePolygon scale={scale} />;
    case "shapes-4":
      return <ShapeUrl scale={scale} />;
    default:
      return null;
  }
}

function renderRotationDemo(
  itemId: string,
  scale: RotationDemoScale
): ReactNode {
  switch (itemId) {
    case "rotation-1":
      return <RotateBurst scale={scale} />;
    case "rotation-2":
      return <RotateOrigin scale={scale} />;
    case "rotation-3":
      return <RotateTilt scale={scale} />;
    case "rotation-4":
      return <RotateSweep scale={scale} />;
    default:
      return null;
  }
}

function renderStudyContent(
  sectionId: string,
  itemId: string,
  scale: SeedDemoScale | ShapeDemoScale | RotationDemoScale = "thumb"
): ReactNode {
  if (sectionId === "overlap") {
    const demo = renderOverlapDemo(itemId, scale as SeedDemoScale);
    if (demo) return demo;
  }
  if (sectionId === "shapes") {
    const demo = renderShapesDemo(itemId, scale as ShapeDemoScale);
    if (demo) return demo;
  }
  if (sectionId === "rotation") {
    const demo = renderRotationDemo(itemId, scale as RotationDemoScale);
    if (demo) return demo;
  }
  return <CaseStudyPlaceholder />;
}

export default function CaseStudiesContent() {
  const { t } = useTranslation();
  const [active, setActive] = useState<ActiveStudy | null>(null);

  return (
    <div className="animate-fadeIn w-full flex flex-col gap-10">
      {caseStudySections.map((section) => (
        <CaseStudySection
          key={section.id}
          title={t(section.titleKey, section.titleDefault)}
        >
          {section.items.map((item) => (
              <CaseStudy
                key={item.id}
                caption={item.caption}
                size={item.size}
                title={item.title}
                previewLayout={section.id === "shapes" ? "block" : "center"}
                onOpen={() =>
                  setActive({
                    caption: item.caption,
                    title: item.title,
                    content: renderStudyContent(section.id, item.id, "modal"),
                    modal: item.modal,
                    demoLayout:
                      section.id === "shapes" ? "editorial" : "center",
                  })
                }
              >
                {renderStudyContent(section.id, item.id, "thumb")}
              </CaseStudy>
            ))}
        </CaseStudySection>
      ))}

      <CaseStudyModal
        open={active !== null}
        onClose={() => setActive(null)}
        caption={active?.caption ?? ""}
        title={active?.title}
        modal={active?.modal}
        demoLayout={active?.demoLayout}
      >
        {active?.content ?? null}
      </CaseStudyModal>
    </div>
  );
}
