import styles from "./cradle.module.css";

export default function NewtonCradle() {
  return (
    <div className={styles.container}>
      <div className={styles.pendulum}>
        <div className={styles.pendulumBox}>
          <div className={`${styles.ball} ${styles.first}`}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={`${styles.ball} ${styles.last}`}></div>
        </div>
      </div>
    </div>
  );
}
