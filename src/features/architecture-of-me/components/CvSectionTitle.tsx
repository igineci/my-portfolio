import styles from "./cv-primitives.module.css";

export type CvSectionTitleProps = {
  id: string;
  children: string;
};

export function CvSectionTitle({ id, children }: CvSectionTitleProps) {
  return (
    <h3 id={id} className={styles.sectionTitle}>
      {children}
    </h3>
  );
}
