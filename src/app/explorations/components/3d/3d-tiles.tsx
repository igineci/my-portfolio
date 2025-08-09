import styles from "./3d-tiles.module.css";
import { GiFlexibleStar } from "react-icons/gi";
import { GiStarSwirl } from "react-icons/gi";
import { GiStarShuriken } from "react-icons/gi";

export default function ThreeDTiles() {
  return (
    <div className={styles.container}>
      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <a href="#" className={styles.socialLink}>
            <GiFlexibleStar className={styles.icon} aria-hidden="true" />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a href="#" className={styles.socialLink}>
            <GiStarSwirl className={styles.icon} aria-hidden="true" />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a href="#" className={styles.socialLink}>
            <GiStarShuriken className={styles.icon} aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
}
