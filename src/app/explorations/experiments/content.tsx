import { useTranslation } from "react-i18next";
import GalleryCard from "../../../components/ui/gallery-card";
import NewtonCradle from "./newton-cradle/cradle";
import MailButton from "./mail/mail";
import LetterI from "./letter/letter";
import GalleryGrid from "../../../components/ui/gallery-grid";

export default function ExperimentsContent() {
  const { t } = useTranslation();

  const items = [
    {
      title: t("letterTitle", "Mysterious letter"),
      description: t("letterDesc", "Smooth letter with smooth lines"),
      node: <LetterI />,
    },
    {
      title: t("newtonsCradle", "Newton's cradle"),
      description: t(
        "newtonsCradleDesc",
        "CSS pendulum with alternating swing physics"
      ),
      node: <NewtonCradle />,
    },
    {
      title: t("mailTitle", "Big mail"),
      description: t("mailDesc", "Hover to see whats inside"),
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
          >
            {it.node}
          </GalleryCard>
        ))}
      </GalleryGrid>
    </div>
  );
}
