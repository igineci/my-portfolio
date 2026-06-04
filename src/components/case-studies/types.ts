import type { ReactNode } from "react";

export type CaseStudySize = "square" | "wide" | "tall" | "rect" | "portrait";

export type StudySectionId = "overlap" | "shapes" | "rotation";

export type OverlapModalCopyKey =
  | "overlap1Modal"
  | "overlap2Modal"
  | "overlap3Modal"
  | "overlap4Modal";

export type ShapesModalCopyKey =
  | "shapes1Modal"
  | "shapes2Modal"
  | "shapes3Modal"
  | "shapes4Modal";

export type RotationModalCopyKey =
  | "rotation1Modal"
  | "rotation2Modal"
  | "rotation3Modal"
  | "rotation4Modal";

export type CasualModalCopyKey = ShapesModalCopyKey | RotationModalCopyKey;

export type CaseStudyModalCopyKey = OverlapModalCopyKey | CasualModalCopyKey;

export type CaseStudyModalField = "pro1" | "con1" | "pick";

export type CaseStudyModalFieldKey =
  | `${OverlapModalCopyKey}.${CaseStudyModalField}`
  | `${CasualModalCopyKey}.pick`;

export type CaseStudyModalTechnicalMeta = {
  copyKey: OverlapModalCopyKey;
  /** CSS only — not translated */
  snippet: string;
};

export type CaseStudyModalCasualMeta = {
  copyKey: CasualModalCopyKey;
};

export type CaseStudyModalMeta =
  | CaseStudyModalTechnicalMeta
  | CaseStudyModalCasualMeta;

export function caseStudyModalFieldKey(
  copyKey: CaseStudyModalCopyKey,
  field: CaseStudyModalField
): CaseStudyModalFieldKey {
  return `${copyKey}.${field}` as CaseStudyModalFieldKey;
}

export type CaseStudyDemoLayout = "center" | "editorial";

export type CaseStudyItem = {
  id: string;
  caption: string;
  size?: CaseStudySize;
  title?: string;
  modal?: CaseStudyModalMeta;
};

export type CaseStudySectionConfig = {
  id: StudySectionId;
  titleKey: string;
  titleDefault: string;
  items: CaseStudyItem[];
};

export type ActiveStudy = {
  caption: string;
  title?: string;
  content: ReactNode;
  modal?: CaseStudyModalMeta;
  demoLayout?: CaseStudyDemoLayout;
};
