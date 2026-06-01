import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enCommon from "./locales/en/common.json";
import srCommon from "./locales/sr/common.json";
import enArchitectureOfMe from "./locales/en/architecture-of-me.json";
import srArchitectureOfMe from "./locales/sr/architecture-of-me.json";

const isDev = import.meta.env.DEV;

const resources = {
  en: {
    common: enCommon,
    architectureOfMe: enArchitectureOfMe,
  },
  sr: {
    common: srCommon,
    architectureOfMe: srArchitectureOfMe,
  },
} as const;

i18n.use(initReactI18next).use(LanguageDetector).init({
  debug: isDev,
  resources,
  supportedLngs: ["en", "sr"],
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common", "architectureOfMe"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
