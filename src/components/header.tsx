"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type LngRet = { [lng: string]: { nativeName: string } };

// Language display mapping
const languageKeys: { [key: string]: string } = {
  en: "EN",
  sr: "SR",
  de: "DE",
  es: "ES",
  ru: "RU",
  // Add more languages as needed
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [lngs, setLngs] = useState<LngRet>({ en: { nativeName: "English" } });

  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.services.backendConnector.backend
      .getLanguages()
      .then((ret: LngRet) => setLngs(ret));
  }, [i18n]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-[#f2f0ea] px-18 pt-4 z-50">
        <div className="PX-10">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Fixed Header Section - Site Name + Underline (acts as table surface) */}
            <div className="header-fixed relative z-30 bg-[#f2f0ea]">
              <div className="text-center mb-4">
                <h1 className="text-3xl font-thin tracking-wider text-[#131313]">
                  Andjela Djekic
                </h1>
              </div>
              {/* Fixed horizontal line under name - acts as the table surface */}
              <div className="w-full h-px bg-[#131313]"></div>
            </div>

            {/* Navigation Drawer Section - Slides out from under the fixed line like a drawer */}
            <div className="header-nav-drawer relative z-10 overflow-hidden">
              <div className="pt-4">
                {/* Navigation */}
                <div className="flex items-center justify-between">
                  {/* Language Switcher - Left - Single cycling button */}
                  <button
                    type="button"
                    onClick={() => {
                      const availableLanguages = Object.keys(lngs);
                      const currentIndex = availableLanguages.indexOf(
                        i18n.resolvedLanguage || "en"
                      );
                      const nextIndex =
                        (currentIndex + 1) % availableLanguages.length;
                      const nextLanguage = availableLanguages[nextIndex];
                      i18n.changeLanguage(nextLanguage);
                      setCount(count + 1);
                    }}
                    className="text-[#131313] text-sm px-3 mb-1 cursor-pointer bg-transparent border-none p-0 transition-colors duration-200"
                  >
                    {languageKeys[i18n.resolvedLanguage || "en"] || "EN"}
                  </button>

                  {/* Navigation Links - Center */}
                  <nav className="flex items-center space-x-12">
                    {/* Home link with router navigation */}
                    <button
                      onClick={() => navigate("/")}
                      className="text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0"
                    >
                      {t("home", "Home")}
                    </button>
                    {/* Work link with router navigation */}
                    <button
                      onClick={() => navigate("/work")}
                      className="text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0"
                    >
                      {t("work", "Work")}
                    </button>
                    {/* Explorations link with router navigation */}
                    <button
                      onClick={() => navigate("/explorations")}
                      className="text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0"
                    >
                      {t("explorations", "Explorations")}
                    </button>
                    {/* About link with router navigation */}
                    <button
                      onClick={() => navigate("/about")}
                      className="text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0"
                    >
                      {t("about", "About")}
                    </button>
                    {/* Contact link with router navigation */}
                    <button
                      onClick={() => navigate("/contact")}
                      className="text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0"
                    >
                      {t("contact", "Contact")}
                    </button>
                  </nav>

                  {/* Empty space for balance - Right */}
                  <div className="w-8"></div>
                </div>

                {/* Bottom border for navigation section */}
                <div className="w-full h-px bg-[#131313] mt-2"></div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-2 pb-6 border-b border-[#131313]">
              {/* Hamburger Menu - Left */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col justify-center items-center space-y-3 px-2"
                aria-label="Toggle menu"
              >
                <div
                  className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
                ></div>
                <div
                  className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
                ></div>
              </button>

              {/* Site Name - Center */}
              <h1 className="text-3xl font-thin tracking-wider text-[#131313] ">
                Andjela Djekic
              </h1>

              {/* Empty space for balance - Right */}
              <div className="w-10"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[84px] left-0 right-0 bg-[#f2f0ea] border-b border-[#131313] z-40 md:hidden">
          <nav className="px-6 py-4 ">
            <div className="flex flex-col space-y-4">
              {/* Home link for mobile */}
              <button
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-xl text-center py-4 border-b border-[#131313] uppercase bg-transparent border-none w-full"
              >
                {t("home", "Home")}
              </button>

              {/* Work link for mobile */}
              <button
                onClick={() => {
                  navigate("/work");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-xl text-center py-4 border-b border-[#131313] uppercase bg-transparent border-none w-full"
              >
                {t("work", "Work")}
              </button>

              {/* Explorations link for mobile */}
              <button
                onClick={() => {
                  navigate("/explorations");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-xl text-center py-4 border-b border-[#131313] uppercase bg-transparent border-none w-full"
              >
                {t("explorations", "Explorations")}
              </button>

              <button
                onClick={() => {
                  navigate("/about");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-xl text-center py-4 border-b border-[#131313] uppercase bg-transparent border-none w-full"
              >
                {t("about", "About")}
              </button>

              <button
                onClick={() => {
                  navigate("/contact");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-xl text-center py-4 border-b border-[#131313] uppercase bg-transparent border-none w-full"
              >
                {t("contact", "Contact")}
              </button>

              {/* Language Switcher in Mobile Menu */}
              <button
                onClick={() => {
                  const availableLanguages = Object.keys(lngs);
                  const currentIndex = availableLanguages.indexOf(
                    i18n.resolvedLanguage || "en"
                  );
                  const nextIndex =
                    (currentIndex + 1) % availableLanguages.length;
                  const nextLanguage = availableLanguages[nextIndex];
                  i18n.changeLanguage(nextLanguage);
                  setCount(count + 1);
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-lg py-2 uppercase"
              >
                {languageKeys[i18n.resolvedLanguage || "en"] || "EN"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
