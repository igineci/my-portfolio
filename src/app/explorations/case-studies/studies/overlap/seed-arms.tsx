import type { CSSProperties } from "react";
import { seedFrameClass } from "./frame-class";
import styles from "./seed.module.css";
import type { SeedDemoScale } from "./types";

const COUNT = 24;
const DEG = Array.from({ length: COUNT }, (_, i) => (360 / COUNT) * i);

type Props = { scale?: SeedDemoScale };

export default function SeedArms({ scale = "thumb" }: Props) {
  return (
    <div className={seedFrameClass(scale, styles.frameRing)}>
      <div className={styles.ring}>
        {DEG.map((d) => (
          <span
            key={d}
            className={styles.arm}
            style={{ "--d": `${d}deg` } as CSSProperties}
          >
            <span className={styles.circle} />
          </span>
        ))}
      </div>
    </div>
  );
}
