import { useTranslation } from "react-i18next";
import docStyles from "../document/cv-document.module.css";

export function CvFooter() {
  const { t } = useTranslation("architectureOfMe");

  return (
    <footer className={docStyles.footerBand}>
      <p className={docStyles.footerItem}>
        <a
          href={t("footer.handleHref")}
          className={docStyles.footerLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.handle")}
        </a>
      </p>
      <p className={docStyles.footerItem}>
        <span className={docStyles.srOnly}>{t("footer.phoneLabel")} </span>
        <a
          href={`tel:${t("footer.phoneTel")}`}
          className={docStyles.footerLink}
        >
          {t("footer.phone")}
        </a>
      </p>
      <p className={docStyles.footerItem}>
        <span className={docStyles.srOnly}>{t("footer.addressLabel")} </span>
        {t("footer.address")}
      </p>
    </footer>
  );
}
