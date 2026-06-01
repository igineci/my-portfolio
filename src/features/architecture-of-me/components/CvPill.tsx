import { Link } from "react-router-dom";
import styles from "./cv-primitives.module.css";

export type CvPillProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
};

export function CvPill({ label, href, external, className }: CvPillProps) {
  const classes = [styles.pill, className].filter(Boolean).join(" ");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {label}
    </Link>
  );
}
