import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import themeConfig from './themeConfig';

const defaultLang = themeConfig.defaultLanguage;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //lng: defaultLang,
    backend: {
      loadPath: '/locales/{{lng}}/common.json',
    },
    fallbackLng: defaultLang,
    //keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    detection: {
      caches: [],
    },
    load: 'languageOnly',
  });
