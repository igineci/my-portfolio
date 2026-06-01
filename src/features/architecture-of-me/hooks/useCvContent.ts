import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type {
  CvEducationItem,
  CvHeaderLink,
  CvSkillItem,
  CvWorkExperienceItem,
} from "../i18n-types";

const NS = "architectureOfMe";

export function useCvContent() {
  const { t, i18n } = useTranslation(NS);

  return useMemo(() => {
    const headerLinks = t("header.links", {
      returnObjects: true,
    }) as CvHeaderLink[];

    const workItems = t("workExperience.items", {
      returnObjects: true,
    }) as CvWorkExperienceItem[];

    const skillItems = t("skills.items", {
      returnObjects: true,
    }) as CvSkillItem[];

    const educationItems = t("education.items", {
      returnObjects: true,
    }) as CvEducationItem[];

    const experienceIdsBySkill = new Map<string, string[]>();
    for (const job of workItems) {
      for (const slug of job.relatedSkills ?? []) {
        const list = experienceIdsBySkill.get(slug) ?? [];
        list.push(job.id);
        experienceIdsBySkill.set(slug, list);
      }
    }

    return {
      headerLinks: Array.isArray(headerLinks) ? headerLinks : [],
      workItems: Array.isArray(workItems) ? workItems : [],
      skillItems: Array.isArray(skillItems) ? skillItems : [],
      educationItems: Array.isArray(educationItems) ? educationItems : [],
      experienceIdsBySkill,
      language: i18n.language,
    };
  }, [t, i18n.language]);
}
