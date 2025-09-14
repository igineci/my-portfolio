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
      tags: ["layout", "navbar", "animation"],
      notes:
        "Use for top-level navigation. Works best with a small set of links and equal padding. Hover to see the underline glide.",
      node: <LineNavBar />,
    },
    {
      title: t("stickyScroll", "Sticky Scroll"),
      description: t("stickyScrollDesc", "Scroll to see the effect!"),
      tags: ["layout", "scroll", "sticky"],
      notes:
        "Ideal for content sections that pin while the user scrolls. Great for storytelling or progressive reveals.",
      node: <Sticky />,
    },
    {
      title: t("skeleton", "Skeleton"),
      description: t("skeletonDesc", "A pure CSS loading skeleton screen"),
      tags: ["loading", "skeleton", "css-only"],
      notes:
        "Drop-in loading placeholder. Wrap content while data loads. Customize colors through Tailwind or CSS vars.",
      node: <Skeleton />,
    },
    {
      title: t("splitScreen", "Split Screen"),
      description: t(
        "splitScreenDesc",
        "Interactive split-screen layout with smooth animations"
      ),
      tags: ["layout", "split", "interactive"],
      notes:
        "Use to contrast two states or options. Ensure adequate contrast for legibility on both sides.",
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
            notes={it.notes}
            tags={it.tags}
          >
            {it.node}
          </GalleryCard>
        ))}
      </GalleryGrid>
    </div>
  );
}
