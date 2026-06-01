/** Shapes returned from architecture-of-me locale JSON via `returnObjects`. */
export type CvHeaderLink = {
  label: string;
  href: string;
  external: boolean;
};

export type CvWorkExperienceItem = {
  id: string;
  company: string;
  dateRange: string;
  role: string;
  bullets: string[];
  /** Accordion section to open on /work (`featured` = Current state). */
  workSection?: string;
  relatedSkills: string[];
};

export type CvSkillItem = {
  slug: string;
  label: string;
};

export type CvEducationItem = {
  id: string;
  period: string;
  degree: string;
  institution: string;
};
