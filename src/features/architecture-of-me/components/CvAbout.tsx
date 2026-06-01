"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CvSectionTitle } from "./CvSectionTitle";
import primStyles from "./cv-primitives.module.css";
import docStyles from "../document/cv-document.module.css";

const SECTION_ID = "cv-about-me";
const PORTRAIT_MIN_WIDTH = 900;

export function CvAbout() {
  const { t } = useTranslation("architectureOfMe");
  const [showPortrait, setShowPortrait] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(`(min-width: ${PORTRAIT_MIN_WIDTH}px)`).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${PORTRAIT_MIN_WIDTH}px)`);
    const update = () => setShowPortrait(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <aside className={docStyles.aboutColumn} aria-labelledby={SECTION_ID}>
      {showPortrait ? (
        <img
          src="/images/cv-portrait.png"
          alt="Andjela Djekic"
          className={docStyles.portrait}
          width={352}
          height={646}
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <section className={docStyles.sectionBlock}>
        <CvSectionTitle id={SECTION_ID}>{t("about.title")}</CvSectionTitle>
        <p className={primStyles.aboutBody}>{t("about.body")}</p>
      </section>
    </aside>
  );
}
