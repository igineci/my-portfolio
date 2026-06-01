import styles from "./page-title-band.module.css";

/** Page title is always English — not passed through i18n. */
export function PageTitleBand() {
  return (
    <section
      className={`cvRoot ${styles.band}`}
      aria-labelledby="architecture-of-me-page-title"
    >
      <div className={styles.inner}>
        <h1 id="architecture-of-me-page-title" className={styles.title}>
          <span className={styles.phrase}>
            <span className={styles.lead}>Architecture </span>
            <span className={styles.tail}>
              <span className={styles.of}>of </span>
              <span className={styles.accent}>Me</span>
            </span>
          </span>
          <span className={styles.rule} aria-hidden="true" />
        </h1>
      </div>
    </section>
  );
}
