import { useTranslation } from "react-i18next";
import { CvPill } from "./CvPill";
import docStyles from "../document/cv-document.module.css";
import primStyles from "./cv-primitives.module.css";

export function CvHeader() {
  const { t } = useTranslation("architectureOfMe");
  const links = t("header.links", { returnObjects: true }) as {
    label: string;
    href: string;
    external: boolean;
  }[];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Andjela_Djekic_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className={docStyles.headerBand}>
      <div className={docStyles.pillRow}>
        {Array.isArray(links) &&
          links.map((link) => (
            <CvPill
              key={link.href}
              href={link.href}
              external={link.external}
              label={link.label}
            />
          ))}
        <button
          type="button"
          className={`${primStyles.pill} ${docStyles.pillDownload}`}
          onClick={handleDownload}
        >
          {t("header.downloadPdf")}
        </button>
      </div>
      <p className={docStyles.headlineSummary}>{t("header.summary")}</p>
    </header>
  );
}
