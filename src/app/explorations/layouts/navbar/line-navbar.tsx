import styles from "./line-navbar.module.css";

export default function LineNavBar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav
          className={styles.links}
          style={{ "--items": 3 } as React.CSSProperties}
        >
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <span className={styles.line}></span>
        </nav>
      </header>
    </div>
  );
}
