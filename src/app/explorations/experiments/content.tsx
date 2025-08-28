import { useTranslation } from "react-i18next";
import GalleryCard from "../../../components/ui/gallery-card";
import NewtonCradle from "./newton-cradle/cradle";
import MailButton from "./mail/mail";
import LetterI from "./letter/letter";
import Tube from "./tube/tube";

export default function ExperimentsContent() {
  const { t } = useTranslation();
  return (
    <div className="animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GalleryCard
          title={t("strip", "Strip")}
          description={t("stripDesc", "A pure CSS loading strip")}
        >
          <Tube />
        </GalleryCard>
        <GalleryCard
          title={t("animatedLetter", "Animated letter")}
          description={t(
            "animatedLetterDesc",
            "Interactive letter animation with smooth lines"
          )}
        >
          <LetterI />
        </GalleryCard>
        <GalleryCard title="Newton's cradle">
          <NewtonCradle />
        </GalleryCard>

        <GalleryCard title="Mail Button" description="Animated mail button">
          <MailButton />
        </GalleryCard>
      </div>
    </div>
  );
}
