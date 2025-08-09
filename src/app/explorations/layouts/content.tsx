import { useTranslation } from "react-i18next";
import GalleryCard from "../../../components/ui/gallery-card";
import LineNavBar from "./navbar/line-navbar";
import Skeleton from "./skeleton/skeleton";
import SplitScreen from "./splitscreen/splitscreen";
import Sticky from "./sticky/sticky";

// Layouts Content Component
export default function LayoutsContent() {
  const { t } = useTranslation();
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GalleryCard
          title={t("magicLine", "Magic line")}
          description={t(
            "magicLineDesc",
            "Navigation bar with a moving underline effect"
          )}
        >
          <LineNavBar />
        </GalleryCard>

        <GalleryCard
          title={t("stickySkroll", "Sticky Scroll")}
          description={t(
            "stickySkrollDesc",
            "A sticky scroll effect that keeps elements in view"
          )}
        >
          <Sticky />
        </GalleryCard>
        <GalleryCard
          title={t("skeleton", "Skeleton")}
          description={t("skeletonDesc", "A pure CSS loading skeleton screen")}
        >
          <Skeleton />
        </GalleryCard>
        <GalleryCard
          title={t("splitScreen", "Split Screen")}
          description={t(
            "splitScreenDesc",
            "Interactive split-screen layout with smooth animations"
          )}
        >
          <SplitScreen />
        </GalleryCard>
      </div>
    </div>
  );
}
