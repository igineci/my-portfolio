import { useTranslation } from "react-i18next";
import GalleryCard from "../../../components/ui/gallery-card";
import NewtonCradle from "./newton-cradle/cradle";
import MailButton from "./mail/mail";
import LetterI from "./letter/letter";
import Tube from "./tube/tube";
import GalleryGrid from "../../../components/ui/gallery-grid";

export default function ExperimentsContent() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("strip", "Strip"),
      description: t("stripDesc", "A pure CSS loading strip"),
      tags: ["experiment", "css-only", "loader"],
      notes:
        "Lightweight loader experiment. Use as a background accent or between content fetches.",
      node: <Tube />,
    },
    {
      title: t("letterTitle", "Mysterious letter"),
      description: t("letterDesc", "Smooth letter with smooth lines"),
      tags: ["svg", "animation", "shape"],
      notes:
        "SVG path animation exploration. Pair with scroll triggers for delightful reveals.",
      node: <LetterI />,
    },
    {
      title: t("newtonsCradle", "Newton's cradle"),
      description: t("newtonsCradleDesc", "Experiment ^ 2"),
      tags: ["physics", "animation", "motion"],
      notes:
        "Timing-based motion demo. Useful for experimenting with easing and chaining.",
      node: <NewtonCradle />,
    },
    {
      title: t("mailTitle", "Big mail"),
      description: t("mailDesc", "Hover to see whats inside"),
      tags: ["hover", "3d", "transform"],
      notes:
        "Hover interaction experiment. Consider reduced-motion preferences for accessibility.",
      node: <MailButton />,
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
