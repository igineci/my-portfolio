import GlitchButtons from "./3d/3d-button-glitch";
import ThreeDTiles from "./3d/3d-tiles";
import GalleryCard from "../../../components/ui/gallery-card";
import SecretCode from "./secret/secret-code";
import Toggle from "./toggle/toggle";
import { useTranslation } from "react-i18next";
import GalleryGrid from "../../../components/ui/gallery-grid";

export default function ComponentsContent() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("3dTiles", "3D Tiles"),
      description: t(
        "3dTilesDesc",
        "Interactive tiles with 3D skew effects and hover animations"
      ),
      
      node: <ThreeDTiles />,
    },
    {
      title: t("secretCode", "Secret Code"),
      description: t("secretCodeDesc", "Glide to reveal secret code"),
      
      node: <SecretCode />,
    },
    {
      title: t("glitchButtons", "Glitch Buttons"),
      description: t(
        "glitchButtonsDesc",
        "3D buttons with glitch effects and color-dodge blend modes"
      ),
      
      node: <GlitchButtons />,
    },
    {
      title: t("toggle", "Animated Toggle"),
      description: t("toggleDesc", "Interactive 3D toggle switch"),
      
      node: <Toggle />,
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
