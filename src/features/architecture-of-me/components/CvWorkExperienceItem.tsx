"use client";

import { GiStarShuriken } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import type { CvWorkExperienceItem as CvWorkExperienceItemData } from "../i18n-types";
import { useCvInteraction } from "../interaction/CvInteractionContext";
import { useExperienceNavigation } from "../interaction/useExperienceNavigation";
import { trackAboutToWorkNavigated } from "@/lib/analytics";
import docStyles from "../document/cv-document.module.css";

export type CvWorkExperienceItemProps = {
  item: CvWorkExperienceItemData;
};

export function CvWorkExperienceItem({ item }: CvWorkExperienceItemProps) {
  const { t } = useTranslation("architectureOfMe");
  const { isExperienceHighlighted, setFocusedExperienceId } =
    useCvInteraction();
  const navigateToWorkSection = useExperienceNavigation();
  const highlighted = isExperienceHighlighted(item.id);
  const workSection = item.workSection;
  const isNavigable = Boolean(workSection);

  const content = (
    <>
      <div className={docStyles.experienceHeader}>
        <span className={docStyles.company}>{item.company}</span>
        <span className={docStyles.meta}>
          | {item.dateRange} | {item.role}
        </span>
      </div>
      <ul className={docStyles.bulletList}>
        {item.bullets.map((bullet, index) => (
          <li key={index} className={docStyles.bullet}>
            <GiStarShuriken
              className={docStyles.bulletIcon}
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </>
  );

  const entryClass = [
    docStyles.experienceEntry,
    highlighted
      ? docStyles.experienceEntryHighlighted
      : docStyles.experienceEntryDimmed,
  ].join(" ");

  if (!isNavigable) {
    return (
      <li
        className={entryClass}
        onMouseEnter={() => setFocusedExperienceId(item.id)}
        onMouseLeave={() => setFocusedExperienceId(null)}
      >
        {content}
      </li>
    );
  }

  return (
    <li className={entryClass}>
      <button
        type="button"
        className={docStyles.experienceInteractive}
        onMouseEnter={() => setFocusedExperienceId(item.id)}
        onMouseLeave={() => setFocusedExperienceId(null)}
        onFocus={() => setFocusedExperienceId(item.id)}
        onBlur={() => setFocusedExperienceId(null)}
        onClick={() => {
          trackAboutToWorkNavigated(workSection!);
          navigateToWorkSection(workSection!);
        }}
        aria-label={`${item.company} — ${t("workExperience.openProject")}`}
      >
        {content}
      </button>
    </li>
  );
}
