import { useTranslation } from "react-i18next";
import CallToAction from "../../components/action/action";
import styles from "./coming-soon.module.css";

export default function ComingSoonCard() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrap} aria-labelledby="coming-soon-heading">
      <div className={styles.row}>
        <div className={styles.hr} />
        <h2 id="coming-soon-heading" className={styles.title}>
          {t("moreTitle", "More coming soon")}
        </h2>
        <div className={styles.hr} />
      </div>

      <div className={styles.captionRow}>
        <p className={styles.caption}>
          {t(
            "moreDesc",
            "Quietly building. If you want early access or to collaborate, reach out."
          )}
        </p>
        <CallToAction />
      </div>
    </section>
  );
}
