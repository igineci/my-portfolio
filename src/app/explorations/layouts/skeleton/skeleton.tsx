import styles from "./skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.skeletonGroup}>
        <div className={styles.card}>
          <div className={`${styles.flex} ${styles.spaceX4}`}>
            <div>
              <div
                className={`${styles.avatar} ${styles.animateGradient}`}
              ></div>
            </div>
            <div className={styles.content}>
              <div
                className={`${styles.titleBar} ${styles.animateGradient}`}
              ></div>
              <div className={styles.textLines}>
                <div
                  className={`${styles.textLine} ${styles.animateGradient}`}
                ></div>
                <div
                  className={`${styles.textLine} ${styles.textLineShort} ${styles.animateGradient}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
