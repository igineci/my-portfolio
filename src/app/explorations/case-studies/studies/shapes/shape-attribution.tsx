import { useTranslation } from "react-i18next";
import styles from "./shapes.module.css";

export type ShapeQuoteId = "shapes1" | "shapes2" | "shapes3" | "shapes4";

const keys: Record<
  ShapeQuoteId,
  {
    author: "shapes1Author" | "shapes2Author" | "shapes3Author" | "shapes4Author";
    book: "shapes1Book" | "shapes2Book" | "shapes3Book" | "shapes4Book";
  }
> = {
  shapes1: { author: "shapes1Author", book: "shapes1Book" },
  shapes2: { author: "shapes2Author", book: "shapes2Book" },
  shapes3: { author: "shapes3Author", book: "shapes3Book" },
  shapes4: { author: "shapes4Author", book: "shapes4Book" },
};

type Props = {
  quoteId: ShapeQuoteId;
};

export default function ShapeAttribution({ quoteId }: Props) {
  const { t } = useTranslation();
  const { author, book } = keys[quoteId];

  return (
    <footer className={styles.cite}>
      <p className={styles.citeAuthor}>{t(author)}</p>
      <p className={styles.citeBook}>{t(book)}</p>
    </footer>
  );
}
