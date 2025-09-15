"use client";
import styles from "./scroll-spinner.module.css";

export default function ScrollSpinner() {
  const items = [
    "Make a song to be happy.",
    "Make a song for a workout.",
    "Make a song for a farewell.",
    "Make a song for my friend Earl.",
    "Make a song about the moon.",
    "Make a song about mum's cooking.",
    "Make a song for lunch.",
    "Make a song for a road trip.",
    "Make a song for a workout.",
    "Make a song for a breakup.",
    "Make a happy song.",
    "Make a song about mitochrondria.",
    "Make a song about how you feel.",
  ];

  return (
    <section
      className={styles.container}
      aria-label="Scroll-controlled rotating prompts"
    >
      <div className={styles.scroller}>
        <div className={styles.buffer} />
        {/* 8 snap points to align with CSS variables */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.snap} />
        ))}

        <div className={styles["spinner-wrap"]}>
          <div className={styles.spinner}>
            <div className={styles.itemWrap}>
              {items.map((text, idx) => (
                <div key={idx} className={styles.item}>
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.dot} />
        </div>
      </div>

      <div className={styles.explainer}>
        <input type="checkbox" defaultChecked />
        <div />
        <p>
          Demo of CSS{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/scroll#browser_compatibility">
            scroll()
          </a>{" "}
          function in concert with{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type">
            scroll-snap
          </a>{" "}
          and{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline">
            animation-timeline
          </a>
          .
        </p>
        <p>Works in Chrome 117+. Does not support Safari / iOS (yet).</p>
        <p>
          <a href="https://x.com/paul_uiux">paul_uiux@</a>
        </p>
      </div>
    </section>
  );
}
