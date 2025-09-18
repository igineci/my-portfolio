import styles from "./line-navbar.module.css";

export default function LineNavBar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav
          className={styles.links}
          style={{ "--items": 3 } as React.CSSProperties}
        >
          <div className={styles.item}>1</div>
          <div className={styles.item}>2</div>
          <div className={styles.item}>3</div>
          <span className={styles.line}></span>
        </nav>
      </header>
    </div>
  );
}
