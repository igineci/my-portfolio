import styles from "./3d-button-glitch.module.css";

export default function GlitchButtons() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button className={styles.glitchButton}>
          <span>Resume</span>
        </button>
        <button className={styles.glitchButton}>New Game</button>
        <button className={styles.glitchButton}>Start</button>
      </main>
    </div>
  );
}
