import styles from "./seed.module.css";
import type { SeedDemoScale } from "./types";

export function seedFrameClass(
  scale: SeedDemoScale,
  extra?: string
): string {
  return [styles.frame, scale === "modal" && styles.frameModal, extra]
    .filter(Boolean)
    .join(" ");
}
