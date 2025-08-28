"use client";

import React from "react";
import styles from "./liquid-button.module.css";

export default function LiquidButton() {
  return (
    <button className={styles.liquidButton}>
      <span className={styles.text}>Click Me</span>
      <span className={styles.blob}></span>
      <span className={styles.blob}></span>
      <span className={styles.blob}></span>
      <span className={styles.blob}></span>
    </button>
  );
}
