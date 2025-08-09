import styles from "./sticky.module.css";
import { useTranslation } from "react-i18next";

export default function Sticky() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.slideFirst}>
        <h2 className={styles.title}>{t("slide1", "The First slide")}</h2>
        <p className={styles.subtitle}>
          {t("skrollSlide", "Scroll Down for next slide")}
        </p>
      </div>
      <div className={styles.slideSecond}>
        <h2 className={styles.title}>{t("slide2", "The Second slide")}</h2>
        <p className={styles.subtitle}>
          {t("skrollSlide", "Scroll Down for next slide")}
        </p>
      </div>
      <div className={styles.slideThird}>
        <h2 className={styles.title}>{t("slide3", "The Third slide")}</h2>
        <p className={styles.subtitle}>{t("skrollSlide", "Scroll Down")}</p>
      </div>
      <div className={styles.slideFourth}>
        <h2 className={styles.title}>{t("slide4", "The Fourth slide")}</h2>
      </div>
    </div>
  );
}
