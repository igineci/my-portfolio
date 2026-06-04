import styles from "./rotation.module.css";
import type { RotationDemoScale } from "./types";

type Props = { scale?: RotationDemoScale };

export default function RotateSweep({ scale = "thumb" }: Props) {
  const modal = scale === "modal";

  return (
    <div className={`${styles.sweepFrame} ${modal ? styles.frameModal : ""}`}>
      <span className={styles.sweepRing} aria-hidden />
      <span className={styles.sweepHub} aria-hidden />
      <span className={styles.sweepBeam} aria-hidden />
    </div>
  );
}
