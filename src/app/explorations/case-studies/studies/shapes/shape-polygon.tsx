import { GiLoveLetter } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import ShapeAttribution from "./shape-attribution";
import styles from "./shapes.module.css";
import type { ShapeDemoScale } from "./types";

type Props = { scale?: ShapeDemoScale };

export default function ShapePolygon({ scale = "thumb" }: Props) {
  const { t } = useTranslation();
  const modal = scale === "modal";

  return (
    <article
      className={`${styles.article} ${modal ? styles.articleModal : ""}`}
    >
      <GiLoveLetter className={styles.floatPoly} aria-hidden />
      <p>{t("shapes3Quote")}</p>
      {modal ? <ShapeAttribution quoteId="shapes3" /> : null}
    </article>
  );
}
