import GlitchButtons from "./3d/3d-button-glitch";
import ThreeDTiles from "./3d/3d-tiles";
import GalleryCard from "../../../components/ui/gallery-card";
import SecretCode from "./secret/secret-code";
import Toggle from "./toggle/toggle";
import { useTranslation } from "react-i18next";

export default function ComponentsContent() {
  const { t } = useTranslation();
  return (
    <div className="animate-fadeIn">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3D Tiles */}
        <GalleryCard
          title={t("3dTiles", "3D Tiles")}
          description={t(
            "3dTilesDesc",
            "Interactive tiles with 3D skew effects and hover animations"
          )}
        >
          <ThreeDTiles />
        </GalleryCard>

        {/* Secret Code  */}
        <GalleryCard
          title={t("secretCode", "Secret Code")}
          description={t("secretCodeDesc", "Glide to reveal secret code")}
        >
          <SecretCode />
        </GalleryCard>

        <GalleryCard
          title={t("glitchButtons", "Glitch Buttons")}
          description={t(
            "glitchButtonsDesc",
            "3D buttons with glitch effects and color-dodge blend modes"
          )}
        >
          <GlitchButtons />
        </GalleryCard>

        {/* Toggle Component */}
        <GalleryCard
          title={t("toggle", "Animated Toggle")}
          description={t("toggleDesc", "Interactive 3D toggle switch")}
        >
          <Toggle />
        </GalleryCard>
      </div>
    </div>
  );
}
