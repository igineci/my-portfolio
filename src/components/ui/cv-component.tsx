"use client";

import { useState } from "react";
import { LiaFileAlt } from "react-icons/lia";
import { TfiDownload } from "react-icons/tfi";
import { HiArrowRight } from "react-icons/hi2";
import { useTranslation } from "react-i18next";

export default function CvComponent() {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simulate download process
    setTimeout(() => {
      // Create download link
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "Andjela Djekic CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 1000);
  };

  return (
    <div className="concrete-rise px-4 sm:px-12 lg:px-18 py-12 sm:py-20">
      <div className="relative border-1 border-[#131313] p-6 sm:p-8 lg:p-10 monumental-hover structural-pulse w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 text-center sm:text-left">
          <div className="mx-auto sm:mx-0 border-1 border-[#131313] p-3">
            <LiaFileAlt className="w-8 h-8 text-[#131313]" />
          </div>
          <div>
            <p className="text-2xl sm:text-[28px] lg:text-[30px] text-[#131313] uppercase tracking-widest">
              {t("CV", "Curriculum vitae")}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-primary mb-6"></div>

        <div className="mb-8 text-center sm:text-left">
          <p className="text-foreground font-medium leading-relaxed text-base sm:text-lg">
            {t(
              "cvDesc",
              "Complete profile including experience, education, and technical competencies."
            )}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 border-[#131313] border-1 mx-auto sm:mx-0"></div>
            <span className="font-medium text-[#131313]/40 uppercase tracking-wide mt-2 sm:mt-0">
              {t("cvFormat", "PDF Format")}
            </span>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full bg-[#131313] text-[#f2f0ea] py-3 sm:py-4 px-4 font-black text-base sm:text-lg uppercase tracking-wider transition-all duration-300 hover:bg-[#131313]/80 hover:shadow-[8px_8px_0px_0px_theme(colors.secondary)] active:shadow-[4px_4px_0px_0px_theme(colors.secondary)] active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <div className="flex items-center justify-center gap-3 ">
            {isDownloading ? (
              <>
                <div className="w-6 h-6 border-2 border-primary-foreground border-t-transparent animate-spin"></div>
                <span>{t("processing", "Processing...")}</span>
              </>
            ) : (
              <>
                <TfiDownload className="w-6 h-6 text-[#f2f0ea]" />
                <span className="font-normal text-[#f2f0ea]  group:hover:text-[#f2fe0a]">
                  {t("cvDownload", "Download CV")}
                </span>
                <HiArrowRight className="w-5 h-5 text-[#f2f0ea] " />
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
