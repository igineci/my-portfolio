"use client";

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  trackLanguageChanged,
  trackNavClicked,
  type NavDestination,
} from "@/lib/analytics";

const languageKeys: Record<string, string> = {
  en: "EN",
  sr: "SR",
};
const supportedLanguages = ["en", "sr"] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  const getCurrentLanguage = () => {
    const normalized = (i18n.resolvedLanguage || "en").split("-")[0];
    return supportedLanguages.includes(normalized as (typeof supportedLanguages)[number])
      ? normalized
      : "en";
  };

  const cycleLanguage = () => {
    const currentLanguage = getCurrentLanguage();
    const currentIndex = supportedLanguages.indexOf(
      currentLanguage as (typeof supportedLanguages)[number],
    );
    const nextLanguage =
      supportedLanguages[(currentIndex + 1) % supportedLanguages.length];

    trackLanguageChanged(currentLanguage, nextLanguage);
    i18n.changeLanguage(nextLanguage);
  };

  const goTo = (
    destination: NavDestination,
    path: string,
    source: "header" | "mobile_menu",
  ) => {
    trackNavClicked(destination, source);
    navigate(path);
  };

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
                    onClick={cycleLanguage}
                    className="text-[#131313] text-sm px-3 mb-1 cursor-pointer bg-transparent border-none p-0 transition-colors duration-200"
                  >
                    {languageKeys[getCurrentLanguage()] || "EN"}
                  </button>

                  {/* Navigation Links - Center */}
                  <nav className="flex items-center space-x-12">
                    {/* Home link with router navigation */}
                    <button
                      onClick={() => goTo("home", "/", "header")}
                      className={`text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0 ${
                        isActivePath("/") ? "nav-active" : ""
                      }`}
                    >
                      {t("home", "Home")}
                    </button>
                    {/* Work link with router navigation */}
                    <button
                      onClick={() => goTo("work", "/work", "header")}
                      className={`text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0 ${
                        isActivePath("/work") ? "nav-active" : ""
                      }`}
                    >
                      {t("work", "Work")}
                    </button>
                    {/* Explorations link with router navigation */}
                    <button
                      onClick={() => goTo("explorations", "/explorations", "header")}
                      className={`text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0 ${
                        isActivePath("/explorations") ? "nav-active" : ""
                      }`}
                    >
                      {t("explorations", "Explorations")}
                    </button>
                    {/* About link with router navigation */}
                    <button
                      onClick={() => goTo("about", "/about", "header")}
                      className={`text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0 ${
                        isActivePath("/about") ? "nav-active" : ""
                      }`}
                    >
                      {t("about", "About")}
                    </button>
                    {/* Contact link with router navigation */}
                    <button
                      onClick={() => goTo("contact", "/contact", "header")}
                      className={`text-[#131313] text-md nav-hover-circle cursor-pointer bg-transparent border-none p-0 ${
                        isActivePath("/contact") ? "nav-active" : ""
                      }`}
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
            <div className="flex items-center justify-between mb-2 pb-6 border-b border-[#131313] px-2">
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
              <h1 className="text-2xl tracking-[0.12em] font-thin text-[#131313] whitespace-nowrap">
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
          <nav className="px-6 py-4">
            <div className="flex flex-col space-y-3">
              {/* Home link for mobile */}
              <button
                onClick={() => {
                  goTo("home", "/", "mobile_menu");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-lg text-center py-4 uppercase bg-transparent border-none w-full"
              >
                {t("home", "Home")}
              </button>

              {/* Work link for mobile */}
              <button
                onClick={() => {
                  goTo("work", "/work", "mobile_menu");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-lg text-center py-4 uppercase bg-transparent border-none w-full"
              >
                {t("work", "Work")}
              </button>

              {/* Explorations link for mobile */}
              <button
                onClick={() => {
                  goTo("explorations", "/explorations", "mobile_menu");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-lg text-center py-4 uppercase bg-transparent border-none w-full"
              >
                {t("explorations", "Explorations")}
              </button>

              <button
                onClick={() => {
                  goTo("about", "/about", "mobile_menu");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-lg text-center py-4 uppercase bg-transparent border-none w-full"
              >
                {t("about", "About")}
              </button>

              <button
                onClick={() => {
                  goTo("contact", "/contact", "mobile_menu");
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-lg text-center py-4 uppercase bg-transparent border-none w-full"
              >
                {t("contact", "Contact")}
              </button>

              {/* Language Switcher in Mobile Menu */}
              <button
                onClick={() => {
                  cycleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="text-[#131313] text-base py-3 uppercase bg-transparent border-none"
              >
                {languageKeys[getCurrentLanguage()] || "EN"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
