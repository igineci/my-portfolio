import { useTranslation } from "react-i18next";
import ShapeAttribution from "./shape-attribution";
import styles from "./shapes.module.css";
import type { ShapeDemoScale } from "./types";

const CIRCLE_IMG = "/images/explorations/circle.png";

type Props = { scale?: ShapeDemoScale };

export default function ShapeCircle({ scale = "thumb" }: Props) {
  const { t } = useTranslation();
  const modal = scale === "modal";

  return (
    <article
      className={`${styles.article} ${modal ? styles.articleModal : ""}`}
    >
      <img
        src={CIRCLE_IMG}
        alt=""
        aria-hidden
        className={styles.float}
        draggable={false}
      />
      <p>{t("shapes1Quote")}</p>
      {modal ? <ShapeAttribution quoteId="shapes1" /> : null}
    </article>
  );
}
