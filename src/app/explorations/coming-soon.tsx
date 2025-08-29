import { useTranslation } from "react-i18next";
import CallToAction from "../../components/action/action";
import styles from "./coming-soon.module.css";

export default function ComingSoonCard() {
  const { t } = useTranslation();
  return (
    <div className="gap-0">
      <div className={styles.card}>
        <h2 className={styles.title}>{t("moreTitle", "More coming soon")}</h2>
      </div>
      <CallToAction />
    </div>
  );
}
