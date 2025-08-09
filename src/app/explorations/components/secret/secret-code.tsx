import styles from "./secret-code.module.css";

export default function SecretCode() {
  return (
    <div className={styles.container}>
      <ul className={styles.code}>
        <li tabIndex={0} className={styles.digit}>
          <span>0</span>
        </li>
        <li tabIndex={0} className={styles.digit}>
          <span>3</span>
        </li>
        <li tabIndex={0} className={styles.digit}>
          <span>4</span>
        </li>
        <li tabIndex={0} className={styles.digit}>
          <span>8</span>
        </li>
        <li tabIndex={0} className={styles.digit}>
          <span>7</span>
        </li>
        <li tabIndex={0} className={styles.digit}>
          <span>2</span>
        </li>
      </ul>
    </div>
  );
}
