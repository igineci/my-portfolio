// Contact Page Component
import Header from "../../components/header";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import Socials from "../../components/ui/socials";
import { ContactDownloadRow } from "../../components/contact/contact-download-row";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen text-[#131313] overflow-hidden relative flex flex-col"
      style={{ backgroundColor: "#f2f0ea" }}
    >
      {/* Content container with same structure as HomePage */}
      <div className="relative z-10 flex-grow">
        {/* Header component - consistent across all pages */}
        <Header />

        {/* Main content area with proper spacing for fixed header */}
        <div className="pt-[8.5rem] sm:pt-[10rem] lg:pt-[12.5rem] px-6 sm:px-10 page-content-fade">
          <div className="relative flex flex-col items-center justify-center mb-8 h-[220px] sm:h-[260px] md:h-[300px]">
            <div className="absolute inset-0 flex justify-center items-center brightness-110">
              <img
                src="images/contact.svg"
                alt="Contact background"
                className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px]"
              />
            </div>
            <h1 className="relative z-10 text-[48px] sm:text-[56px] md:text-[64px] lg:text-[80px] text-center uppercase font-light text-[#333333] leading-tight tracking-wider">
              {t("contact", "Contact")}
            </h1>
          </div>{" "}
          <p className="text-[#131313] px-4 sm:px-7 text-2xl sm:text-3xl mb-4 text-center">
            {t("contactTitle", "Let’s make your project a reality")}
          </p>
          <p className="text-[#131313] px-4 sm:px-7 text-base sm:text-lg mb-12 text-center mx-auto max-w-[700px]">
            {t(
              "contactDesc",
              "Whether you’re working on a project as an architect, designer, contractor, or simply on your own, share your project details with me and I’ll carefully review them to provide you with a clear and fair solution offer.",
            )}
          </p>
          {/* Contact Information Rows */}
          <div className="mt-12 sm:mt-16 px-4 sm:px-7">
            {/* Phone Contact Row */}
            <div className="border-t border-b border-[#131313] py-10 mb-0">
              <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[#929291] text-sm sm:text-base font-light">TEL</span>
                <span className="text-[#131313] text-2xl sm:text-3xl font-light">
                  +381691505303
                </span>
              </div>
            </div>

            {/* Email Contact Row */}
            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[#929291] text-sm sm:text-base font-light">EMAIL</span>
                <span className="text-[#131313] text-2xl sm:text-3xl font-light break-words">
                  andjeladjek@gmail.com
                </span>
              </div>
            </div>

            {/* Location Row */}
            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex flex-col gap-4 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[#929291] text-sm sm:text-base font-light">
                  ADDRESS
                </span>
                <span className="text-[#131313] text-2xl sm:text-3xl font-light">
                  {t("bg", "Belgrade, Serbia")}
                </span>
              </div>
            </div>

            <ContactDownloadRow
              label={t("cv", "CV")}
              value={t("cv", "CV")}
              href="/cv.pdf"
              downloadFilename="Andjela_Djekic_CV.pdf"
              downloadHint={t("downloadHint", "Click to download · pdf")}
            />

            <ContactDownloadRow
              label={t("engineeringStatementLabel", "Engineering Statement")}
              value={t("engineeringStatementValue", "Statement")}
              href="/Engineering_Statement_Andjela_Djekic.pdf"
              downloadFilename="Engineering_Statement_Andjela_Djekic.pdf"
              downloadHint={t("downloadHint", "Click to download · pdf")}
            />
          </div>
        </div>
      </div>
      <Socials />
      <div className="border-b border-[#131313] mx-18 mt-7"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
