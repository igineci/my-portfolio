"use client";

import "../design/cv-tokens.css";
import { CvInteractionProvider } from "../interaction/CvInteractionContext";
import {
  CvHeader,
  CvAbout,
  CvWorkExperience,
  CvSkills,
  CvEducation,
  CvFooter,
} from "../components";
import docStyles from "./cv-document.module.css";

export function CvDocument() {
  return (
    <CvInteractionProvider>
      <article
        className={`cvRoot ${docStyles.document}`}
        aria-label="Curriculum vitae"
      >
        <div className={docStyles.grid}>
          <CvHeader />
          <div className={docStyles.bodyGrid}>
            <CvAbout />
            <div className={docStyles.mainColumn}>
              <CvWorkExperience />
              <CvSkills />
              <CvEducation />
            </div>
          </div>
          <CvFooter />
        </div>
        <p
          className={docStyles.liveRegion}
          aria-live="polite"
          aria-atomic="true"
        />
      </article>
    </CvInteractionProvider>
  );
}
