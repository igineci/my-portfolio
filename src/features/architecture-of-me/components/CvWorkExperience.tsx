import { useTranslation } from "react-i18next";
import type { CvWorkExperienceItem as CvWorkExperienceItemData } from "../i18n-types";
import { CvSectionTitle } from "./CvSectionTitle";
import { CvWorkExperienceItem } from "./CvWorkExperienceItem";
import docStyles from "../document/cv-document.module.css";

const SECTION_ID = "cv-work-experience";

export function CvWorkExperience() {
  const { t } = useTranslation("architectureOfMe");
  const items = t("workExperience.items", {
    returnObjects: true,
  }) as CvWorkExperienceItemData[];

  return (
    <section
      className={docStyles.sectionBlock}
      aria-labelledby={SECTION_ID}
    >
      <CvSectionTitle id={SECTION_ID}>
        {t("workExperience.title")}
      </CvSectionTitle>
      <ul className={docStyles.experienceList}>
        {Array.isArray(items) &&
          items.map((item) => (
            <CvWorkExperienceItem key={item.id} item={item} />
          ))}
      </ul>
    </section>
  );
}
