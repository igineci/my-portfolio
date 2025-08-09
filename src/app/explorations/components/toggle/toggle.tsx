import { useState } from "react";
import styles from "./toggle.module.css";

export default function Toggle() {
  // State to track if the toggle has been clicked (removes pristine state)
  const [isPristine, setIsPristine] = useState(true);

  const handleClick = () => {
    // Remove pristine class on first click
    if (isPristine) {
      setIsPristine(false);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        name="toggle"
        value="on"
        className={isPristine ? styles.pristine : ""}
        onClick={handleClick}
      />
    </div>
  );
}
