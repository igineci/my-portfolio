import type { CSSProperties } from "react";
import styles from "./rotation.module.css";
import type { RotationDemoScale } from "./types";

const GRID = [
  { origin: "0% 0%", dotX: "20%", dotY: "20%", label: "left top" },
  { origin: "50% 0%", dotX: "50%", dotY: "20%", label: "center top" },
  { origin: "100% 0%", dotX: "80%", dotY: "20%", label: "right top" },
  { origin: "0% 50%", dotX: "20%", dotY: "50%", label: "left center" },
  { origin: "50% 50%", dotX: "50%", dotY: "50%", label: "center center" },
  { origin: "100% 50%", dotX: "80%", dotY: "50%", label: "right center" },
  { origin: "0% 100%", dotX: "20%", dotY: "80%", label: "left bottom" },
  { origin: "50% 100%", dotX: "50%", dotY: "80%", label: "center bottom" },
  { origin: "100% 100%", dotX: "80%", dotY: "80%", label: "right bottom" },
] as const;

type Props = { scale?: RotationDemoScale };

export default function RotateOrigin({ scale = "thumb" }: Props) {
  const modal = scale === "modal";

  return (
    <div
      className={`${styles.originGrid} ${modal ? styles.originGridModal : ""}`}
    >
      {GRID.map(({ origin, dotX, dotY, label }) => (
        <div key={origin} className={styles.originGridCell}>
          <div className={styles.originDemo}>
            <div className={styles.originSquareBox}>
              <span className={styles.originGhost}>
                <span className={styles.originLabel}>{label}</span>
              </span>
              <span
                className={styles.originRotated}
                style={{ "--origin": origin } as CSSProperties}
                aria-hidden
              />
              <span
                className={styles.originDot}
                style={
                  { "--dot-x": dotX, "--dot-y": dotY } as CSSProperties
                }
                aria-hidden
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
