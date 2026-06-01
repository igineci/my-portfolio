"use client";

import { useTranslation } from "react-i18next";
import type { CvSkillItem } from "../i18n-types";
import { useCvInteraction } from "../interaction/CvInteractionContext";
import { CvSectionTitle } from "./CvSectionTitle";
import primStyles from "./cv-primitives.module.css";
import docStyles from "../document/cv-document.module.css";

const SECTION_ID = "cv-skills";

function CvSkillTag({ slug, label }: CvSkillItem) {
  const { setHoveredSkillSlug, isSkillHighlighted } = useCvInteraction();
  const highlighted = isSkillHighlighted(slug);

  return (
    <button
      type="button"
      className={[
        primStyles.skillTag,
        primStyles.skillTagInteractive,
        highlighted ? primStyles.skillTagHighlighted : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={() => setHoveredSkillSlug(slug)}
      onMouseLeave={() => setHoveredSkillSlug(null)}
      onFocus={() => setHoveredSkillSlug(slug)}
      onBlur={() => setHoveredSkillSlug(null)}
    >
      {label}
    </button>
  );
}

export function CvSkills() {
  const { t } = useTranslation("architectureOfMe");
  const items = t("skills.items", { returnObjects: true }) as CvSkillItem[];

  return (
    <section
      className={docStyles.sectionBlock}
      aria-labelledby={SECTION_ID}
    >
      <CvSectionTitle id={SECTION_ID}>{t("skills.title")}</CvSectionTitle>
      <div className={docStyles.skillsRow} role="list">
        {Array.isArray(items) &&
          items.map((skill) => <CvSkillTag key={skill.slug} {...skill} />)}
      </div>
    </section>
  );
}
