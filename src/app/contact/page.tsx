// Contact Page Component
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import Socials from "../../components/ui/socials";
export default function ContactPage() {
  const { t } = useTranslation();
  // Handler to download CV and underline text
  const handleCvDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
        <div className="pt-50 px-10 page-content-fade">
          <div className="relative flex justify-center items-center mb-8 h-[300px]">
            <div className="absolute inset-0 flex justify-center items-center hover:brightness-110">
              <img
                src="images/contact.svg"
                alt="Contact background"
                className="w-[300px] h-[300px]"
              />
            </div>
            <h1 className="relative z-10 text-[80px] text-center md:text-[60px] uppercase font-light text-[#333333] leading-tight tracking-wider">
              {t("contact", "Contact")}
            </h1>
          </div>{" "}
          <p className="text-[#131313] px-7 text-3xl mb-4 text-center">
            {t("contactTitle", "Let’s make your project a reality")}
          </p>
          <p className="text-[#131313] px-7 text-lg mb-12 text-center mx-auto max-w-[700px]">
            {t(
              "contactDesc",
              "Whether you’re working on a project as an architect, designer, contractor, or simply on your own, share your project details with me and I’ll carefully review them to provide you with a clear and fair solution offer."
            )}
          </p>
          {/* Contact Information Rows */}
          <div className="mt-16 px-7">
            {/* Phone Contact Row */}
            <div className="border-t border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">TEL</span>
                <span className="text-[#131313] text-3xl font-light">
                  +381691505303
                </span>
              </div>
            </div>

            {/* Email Contact Row */}
            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">EMAIL</span>
                <span className="text-[#131313] text-3xl font-light">
                  andjeladjek@gmail.com
                </span>
              </div>
            </div>

            {/* Location  Row */}
            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">
                  ADDRESS
                </span>
                <span className="text-[#131313] text-3xl font-light">
                  {t("bg", "Belgrade, Serbia")}
                </span>
              </div>
            </div>

            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">CV</span>
                <span
                  className="text-[#131313] text-3xl font-light cursor-pointer transition-all duration-200"
                  onClick={handleCvDownload}
                >
                  {t("cv", "CV")}
                </span>
              </div>
            </div>
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
