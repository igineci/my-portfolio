// Footer Component
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#f2f0ea] mt-auto">
      <div className="px-18 py-16">
        {/* Main Footer Content - Rectangular Layout */}
        <div className=" mx-auto">
          {/* Footer Rectangle Container */}
          <div className="relative border border-[#131313] p-6 bg-[#f2f0ea] overflow-hidden">
            {/* Content Grid - Single Line Layout */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Left - Name and Title */}
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-light text-[#131313] tracking-wider">
                  Andjela Djekic
                </h3>
                <p className="text-[#131313] text-sm opacity-70">
                  {t("dev", "Frontend Developer & Designer")}
                </p>
              </div>

              {/* Center - Navigation Links */}
              <nav className="flex flex-wrap justify-center space-x-6">
                <button
                  onClick={() => navigate("/")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 bg-transparent border-none p-0"
                >
                  {t("home", "Home")}
                </button>
                <button
                  onClick={() => navigate("/work")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 bg-transparent border-none p-0"
                >
                  {t("work", "Work")}
                </button>
                <button
                  onClick={() => navigate("/explorations")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 bg-transparent border-none p-0"
                >
                  {t("explorations", "Explorations")}
                </button>
                <a
                  href="#about"
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200"
                >
                  {t("about", "About")}
                </a>
              </nav>

              {/* Right - Contact Info */}
              <div className="text-center lg:text-right">
                <a
                  href="mailto:andjeladjek@gmail.com"
                  className="text-[#131313] text-sm hover:opacity-70 transition-opacity duration-200 block"
                >
                  andjeladjek@gmail.com
                </a>
                <span className="text-[#131313] text-sm opacity-70">
                  {t("bg", "Belgrade, Serbia")}
                </span>
              </div>
            </div>

            {/* Copyright - Bottom */}
            <div className="text-center mt-6 pt-4 border-t border-[#131313] opacity-50">
              <span className="text-[#131313] text-xs">
                {t("rigths", "© 2025 Andjela Djekic. All rights reserved.")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
