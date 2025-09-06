import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import EnglishTranslation from "./locales/TranslationEn.json";
import FrenchTranslation from "./locales/TranslationFr.json";
// Traductions
const resources = {
  en: { translation: EnglishTranslation },
  fr: { translation: FrenchTranslation },
};

i18n
  .use(LanguageDetector) // détecte la langue du navigateur
  .use(initReactI18next) // passe à react-i18next
  .init({
    resources,
    lng: "fr",
    //debug: true,
    fallbackLng: "en", // langue par défaut
    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },
  },
);

export default i18n;
