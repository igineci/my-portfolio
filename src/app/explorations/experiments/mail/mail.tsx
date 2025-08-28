"use client";

import React from "react";
import styles from "./mail.module.css";

export default function MailButton() {
  return (
    <div className={styles.letterImage}>
      <div className={styles.animatedMail}>
        <div className={styles.backFold}></div>
        <div className={styles.letter}>
          <div className={styles.letterBorder}></div>
          <div className={styles.letterTitle}></div>
          <div className={styles.letterContext}></div>
          <div className={styles.letterStamp}>
            <div className={styles.letterStampInner}></div>
          </div>
        </div>
        <div className={styles.topFold}></div>
        <div className={styles.body}></div>
        <div className={styles.leftFold}></div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}
