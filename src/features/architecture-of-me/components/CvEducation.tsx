import { useTranslation } from "react-i18next";
import type { CvEducationItem } from "../i18n-types";
import { CvSectionTitle } from "./CvSectionTitle";
import docStyles from "../document/cv-document.module.css";

const SECTION_ID = "cv-education";

function CvEducationItem({ item }: { item: CvEducationItem }) {
  return (
    <li className={docStyles.educationRow}>
      <span className={docStyles.educationPeriod}>{item.period}</span>
      <span className={docStyles.educationArrow} aria-hidden="true">
        →
      </span>
      <p className={docStyles.educationDetail}>
        {item.degree} {item.institution}
      </p>
    </li>
  );
}

export function CvEducation() {
  const { t } = useTranslation("architectureOfMe");
  const items = t("education.items", {
    returnObjects: true,
  }) as CvEducationItem[];

  return (
    <section
      className={docStyles.sectionBlock}
      aria-labelledby={SECTION_ID}
    >
      <CvSectionTitle id={SECTION_ID}>{t("education.title")}</CvSectionTitle>
      <ul className={docStyles.educationList}>
        {Array.isArray(items) &&
          items.map((item) => <CvEducationItem key={item.id} item={item} />)}
      </ul>
    </section>
  );
}
