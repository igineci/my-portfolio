import styles from "./3d-tiles.module.css";
import { GiFlexibleStar } from "react-icons/gi";
import { GiStarSwirl } from "react-icons/gi";
import { GiStarShuriken } from "react-icons/gi";

export default function ThreeDTiles() {
  return (
    <div className={styles.container}>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <div className={styles.socialLink} aria-hidden="true">
            <GiFlexibleStar className={styles.icon} aria-hidden="true" />
          </div>
        </li>
        <li className={styles.socialItem}>
          <div className={styles.socialLink} aria-hidden="true">
            <GiStarSwirl className={styles.icon} aria-hidden="true" />
          </div>
        </li>
        <li className={styles.socialItem}>
          <div className={styles.socialLink} aria-hidden="true">
            <GiStarShuriken className={styles.icon} aria-hidden="true" />
          </div>
        </li>
      </ul>
    </div>
  );
}
