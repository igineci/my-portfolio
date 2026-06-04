import type { CSSProperties } from "react";
import { seedFrameClass } from "./frame-class";
import styles from "./seed.module.css";
import type { SeedDemoScale } from "./types";

const DEG = [0, 45, 90, 135, 180, 225, 270, 315];

type Props = { scale?: SeedDemoScale };

export default function SeedGrid({ scale = "thumb" }: Props) {
  return (
    <div className={seedFrameClass(scale)}>
      <div className={styles.stack}>
        {DEG.map((d) => (
          <span
            key={d}
            className={styles.circle}
            style={{ "--d": `${d}deg` } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
