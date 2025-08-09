import { useState } from "react";
import styles from "./splitscreen.module.css";
import { useTranslation } from "react-i18next";

type PaneState = "both" | "left" | "right";

export default function SplitScreen() {
  const [paneState, setPaneState] = useState<PaneState>("both");
  const { t } = useTranslation();

  const handleLeftPaneClick = () => {
    setPaneState("right");
  };

  const handleRightPaneClick = () => {
    setPaneState("left");
  };

  return (
    <div className={styles.container}>
      {/* Left Pane */}
      <div
        className={`${styles.leftPane} ${
          paneState === "left"
            ? styles.fullWidth
            : paneState === "right"
            ? styles.hidden
            : styles.halfWidth
        }`}
      >
        <div className={styles.leftButtonContainer}>
          <div className={styles.leftPaneButton} onClick={handleLeftPaneClick}>
            {t("click", "Click")}
          </div>
        </div>
        <div className={styles.leftContent}> 1</div>
      </div>

      {/* Right Pane */}
      <div
        className={`${styles.rightPane} ${
          paneState === "right"
            ? styles.fullWidth
            : paneState === "left"
            ? styles.hidden
            : styles.halfWidth
        }`}
      >
        <div className={styles.rightButtonContainer}>
          <div
            className={styles.rightPaneButton}
            onClick={handleRightPaneClick}
          >
            {t("click", "Click")}
          </div>
        </div>
        <div className={styles.rightContent}>2</div>
      </div>
    </div>
  );
}
