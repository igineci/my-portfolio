"use client";

import styles from "./tube.module.css";

const COUNT = 64;

export default function Tube() {
  const tubes = [0, 1, 2]; // tri tube
  return (
    <div className={styles.container}>
      {tubes.map((tubeIndex) => (
        <div
          key={tubeIndex}
          className={styles.tube}
          style={{ animationDelay: `-${tubeIndex * 2.5}s` }}
        >
          {Array.from({ length: COUNT }).map((_, i) => (
            <div
              key={i}
              className={styles.strip}
              style={{
                transform: `rotateY(${
                  (360 / COUNT) * i
                }deg) translateZ(var(--dist))`,
                backgroundPosition: `calc(var(--width) * -${i}) center`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
