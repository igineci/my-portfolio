import { useTranslation } from "react-i18next";
import ShapeAttribution from "./shape-attribution";
import styles from "./shapes.module.css";
import type { ShapeDemoScale } from "./types";

const EGG_IMG = "/images/explorations/egg.png";

type Props = { scale?: ShapeDemoScale };

export default function ShapeEllipse({ scale = "thumb" }: Props) {
  const { t } = useTranslation();
  const modal = scale === "modal";

  return (
    <article
      className={`${styles.article} ${modal ? styles.articleModal : ""}`}
    >
      <img
        src={EGG_IMG}
        alt=""
        aria-hidden
        className={styles.floatEgg}
        draggable={false}
      />
      <p>{t("shapes2Quote")}</p>
      {modal ? <ShapeAttribution quoteId="shapes2" /> : null}
    </article>
  );
}
