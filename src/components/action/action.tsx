"use client";

import { useState } from "react";
import styles from "./action.module.css";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const { t } = useTranslation();

  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          {t("moreDesc", "Have a project in mind? Send me a message!")}
        </p>
        <button className={styles.ctaButton} onClick={handleClick}>
          {t("moreButton", "Get in Touch")}
        </button>
        {showForm && <div className={styles.formWrapper}></div>}
      </div>
    </section>
  );
}
