import type { CSSProperties } from "react";
import styles from "./rotation.module.css";
import type { RotationDemoScale } from "./types";

const SPOKES = 12;
const STEP = 360 / SPOKES;
const ACCENT = 3;

type Props = { scale?: RotationDemoScale };

export default function RotateBurst({ scale = "thumb" }: Props) {
  const modal = scale === "modal";

  return (
    <div className={`${styles.frame} ${modal ? styles.frameModal : ""}`}>
      <span className={styles.hub} aria-hidden />
      {Array.from({ length: SPOKES }, (_, i) => (
        <span
          key={i}
          className={`${styles.spoke} ${i === ACCENT ? styles.spokeAccent : ""}`}
          style={{ "--r": `${i * STEP}deg` } as CSSProperties}
          aria-hidden
        />
      ))}
    </div>
  );
}
