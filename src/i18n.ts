import i18n from 'i18next'
import { initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import LocizeBackend from 'i18next-locize-backend'
import {locizePlugin} from 'locize'
import LastUsed from 'locize-lastused'

const isDev = import.meta.env.DEV

const locizeOptions = {
    projectId: import.meta.env.VITE_LOCIZE_PROJECTID,
    apiKey: import.meta.env.VITE_LOCIZE_APIKEY,
    version: import.meta.env.VITE_LOCIZE_VERSION
}

if (isDev) {
    i18n.use(LastUsed)
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(LocizeBackend)
  .use(locizePlugin)
  .init({debug: isDev,
    fallbackLng: 'en',
    backend: locizeOptions,
    locizeLastUsed: locizeOptions,
    saveMissing: isDev
   })

   export default i18n