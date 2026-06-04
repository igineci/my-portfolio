import type { CSSProperties } from "react";
import { seedFrameClass } from "./frame-class";
import styles from "./seed.module.css";
import type { SeedDemoScale } from "./types";

const DEG = [0, 90, 180, 270];

type Props = { scale?: SeedDemoScale };

export default function SeedTransform({ scale = "thumb" }: Props) {
  return (
    <div className={seedFrameClass(scale)}>
      <div className={styles.orbit}>
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
