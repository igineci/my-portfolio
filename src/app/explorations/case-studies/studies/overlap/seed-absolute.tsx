import { seedFrameClass } from "./frame-class";
import styles from "./seed.module.css";
import type { SeedDemoScale } from "./types";

type Props = { scale?: SeedDemoScale };

export default function SeedAbsolute({ scale = "thumb" }: Props) {
  return (
    <div className={seedFrameClass(scale)}>
      <div className={styles.hex}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={styles.circle} />
        ))}
      </div>
    </div>
  );
}
