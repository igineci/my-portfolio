import { Link } from "react-router-dom";
import styles from "./cv-primitives.module.css";

export type CvPillProps = {
  label: string;
  href: string;
  external?: boolean;
  className?: string;
  onNavigate?: () => void;
};

export function CvPill({
  label,
  href,
  external,
  className,
  onNavigate,
}: CvPillProps) {
  const classes = [styles.pill, className].filter(Boolean).join(" ");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={href} className={classes} onClick={onNavigate}>
      {label}
    </Link>
  );
}
