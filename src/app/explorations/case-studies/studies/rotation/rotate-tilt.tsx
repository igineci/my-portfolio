import styles from "./rotation.module.css";
import type { RotationDemoScale } from "./types";

type Props = { scale?: RotationDemoScale };

export default function RotateTilt({ scale = "thumb" }: Props) {
  const modal = scale === "modal";

  return (
    <div className={`${styles.tiltFrame} ${modal ? styles.frameModal : ""}`}>
      <div className={styles.tiltStage}>
        <span className={styles.tiltGhost} aria-hidden />
        <span className={styles.tiltPlate} aria-hidden />
      </div>
    </div>
  );
}
