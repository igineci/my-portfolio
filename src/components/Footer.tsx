// Footer Component
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  trackMailtoClicked,
  trackNavClicked,
  type NavDestination,
} from "@/lib/analytics";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goTo = (destination: NavDestination, path: string) => {
    trackNavClicked(destination, "footer");
    navigate(path);
  };

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
                  {t("dev", "Medior Frontend Engineer")}
                </p>
              </div>

              {/* Center - Navigation Links */}
              <nav className="flex flex-wrap justify-center space-x-6">
                <button
                  onClick={() => goTo("home", "/")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 bg-transparent border-none p-0 hover:cursor-pointer"
                >
                  {t("home", "Home")}
                </button>
                <button
                  onClick={() => goTo("work", "/work")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 bg-transparent border-none p-0 hover:cursor-pointer"
                >
                  {t("work", "Work")}
                </button>
                <button
                  onClick={() => goTo("explorations", "/explorations")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 bg-transparent border-none p-0 hover:cursor-pointer"
                >
                  {t("explorations", "Explorations")}
                </button>
                <button
                  onClick={() => goTo("about", "/about")}
                  className="text-[#131313] text-sm nav-hover-circle transition-opacity duration-200 hover:cursor-pointer"
                >
                  {t("about", "About")}
                </button>
              </nav>

              {/* Right - Contact Info */}
              <div className="text-center lg:text-right">
                <a
                  href="mailto:andjeladjek@gmail.com"
                  onClick={() => trackMailtoClicked("footer")}
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
