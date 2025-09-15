import { useTranslation } from "react-i18next";
import GalleryCard from "../../../components/ui/gallery-card";
import GalleryGrid from "../../../components/ui/gallery-grid";
import LineNavBar from "./navbar/line-navbar";
import Skeleton from "./skeleton/skeleton";
import SplitScreen from "./splitscreen/splitscreen";
import Sticky from "./sticky/sticky";

// Layouts Content Component
export default function LayoutsContent() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("magicLine", "Magic line"),
      description: t(
        "magicLineDesc",
        "Navigation bar with a moving underline effect"
      ),
      
      node: <LineNavBar />,
    },
    {
      title: t("stickyScroll", "Sticky Scroll"),
      description: t("stickyScrollDesc", "Scroll to see the effect!"),
      
      node: <Sticky />,
    },
    {
      title: t("skeleton", "Skeleton"),
      description: t("skeletonDesc", "A pure CSS loading skeleton screen"),
      
      node: <Skeleton />,
    },
    {
      title: t("splitScreen", "Split Screen"),
      description: t(
        "splitScreenDesc",
        "Interactive split-screen layout with smooth animations"
      ),
      
      node: <SplitScreen />,
    },
  ];

  return (
    <div className="animate-fadeIn">
      <GalleryGrid>
        {items.map((it, idx) => (
          <GalleryCard
            key={`${it.title}-${idx}`}
            title={it.title}
            description={it.description}
          >
            {it.node}
          </GalleryCard>
        ))}
      </GalleryGrid>
    </div>
  );
}
