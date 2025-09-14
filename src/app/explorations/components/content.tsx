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
      tags: ["component", "3d", "hover"],
      notes:
        "Great for feature grids or dashboards. Keep tile count modest to maintain performance with heavy effects.",
      node: <ThreeDTiles />,
    },
    {
      title: t("secretCode", "Secret Code"),
      description: t("secretCodeDesc", "Glide to reveal secret code"),
      tags: ["fun", "reveal", "mask"],
      notes:
        "Use as a playful reveal. Works well for onboarding hints or easter eggs.",
      node: <SecretCode />,
    },
    {
      title: t("glitchButtons", "Glitch Buttons"),
      description: t(
        "glitchButtonsDesc",
        "3D buttons with glitch effects and color-dodge blend modes"
      ),
      tags: ["button", "glitch", "cta"],
      notes:
        "Use sparingly for emphasis (e.g., hero CTA). Ensure accessible contrast and provide a plain fallback.",
      node: <GlitchButtons />,
    },
    {
      title: t("toggle", "Animated Toggle"),
      description: t("toggleDesc", "Interactive 3D toggle switch"),
      tags: ["toggle", "switch", "interactive"],
      notes:
        "Suitable for settings panels. Respect reduced-motion preferences for users sensitive to animation.",
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
