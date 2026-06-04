import { useTranslation } from "react-i18next";
import ShapeAttribution from "./shape-attribution";
import styles from "./shapes.module.css";
import type { ShapeDemoScale } from "./types";

const PORTRAIT_IMG = "/images/explorations/test.png";

type Props = { scale?: ShapeDemoScale };

export default function ShapeUrl({ scale = "thumb" }: Props) {
  const { t } = useTranslation();
  const modal = scale === "modal";

  return (
    <article
      className={`${styles.article} ${styles.articleUrl} ${modal ? styles.articleModal : ""}`}
    >
      <img
        src={PORTRAIT_IMG}
        alt=""
        aria-hidden
        className={styles.floatUrl}
        draggable={false}
      />
      <p>{t("shapes4Quote")}</p>
      {modal ? <ShapeAttribution quoteId="shapes4" /> : null}
    </article>
  );
}
