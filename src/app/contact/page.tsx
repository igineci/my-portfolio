// Contact Page Component
import Header from "../../components/header";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

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
        <div className="pt-50 px-10 page-content-fade">
         
          <div className="relative flex justify-center items-center mb-8 h-[300px]">
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src="images/contact.svg"
                alt="Contact background"
                className="w-[300px] h-[300px]"
              />
            </div>
            <h1 className="relative z-10 text-[80px] text-center md:text-[100px] uppercase font-light text-[#333333] leading-tight tracking-wider">
              {t("contact", "Contact")}
            </h1>
          </div>{" "}
          <p className="text-[#131313] px-7 text-3xl mb-4 text-left">
            {t("makeProjectReality", "Let’s make your project a reality")}
          </p>
          <p className="text-[#131313] px-7 text-lg mb-12 text-left w-[700px]">
            Whether you are an architect, designer, contractor or an individual,
            send us all the documents relating to your project and we will take
            great care to examine your request in order to send you a fair and
            detailed quote.
          </p>
          {/* Contact Information Rows */}
          <div className="mt-16 px-7">
            {/* Phone Contact Row */}
            <div className="border-t border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">T</span>
                <span className="text-[#131313] text-3xl font-light">
                  +381691505303
                </span>
              </div>
            </div>

            {/* Email Contact Row */}
            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">E</span>
                <span className="text-[#131313] text-3xl font-light">
                  andjeladjek@gmail.com
                </span>
              </div>
            </div>

            {/* Location  Row */}
            <div className="border-b border-[#131313] py-10 mb-0">
              <div className="flex justify-between items-center">
                <span className="text-[#929291] text-lg font-light">A</span>
                <span className="text-[#131313] text-3xl font-light">
                  {t("bg", "Belgrade, Serbia")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
