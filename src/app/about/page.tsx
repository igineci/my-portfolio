import Header from "../../components/header";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div
      className="min-h-screen text-[#131313] overflow-hidden relative flex flex-col"
      style={{ backgroundColor: "#f2f0ea" }}
    >
      <div className="relative z-10 flex-grow">
        <Header />

        <div className="pt-50 px-10 page-content-fade">
          <div className="relative flex justify-center items-center mb-8 h-[300px]">
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src="images/about.png"
                alt="About background"
                className="w-[300px] h-[300px]"
              />
            </div>
            <h1 className="relative z-10 text-[80px] text-center md:text-[100px] uppercase font-light text-[#333333] leading-tight tracking-wider">
              {t("about", "About")}
            </h1>
          </div>{" "}
        </div>
      </div>
      <Footer />
    </div>
  );
}
