import { initReactI18next } from "react-i18next";
import i18next from "i18next";

import { useUserStore } from "../stores/userStore";
import en from "./locales/en.json";
import pt from "./locales/pt.json";

export const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
} as const;

const language = useUserStore.getState().locale;

console.log("i18n language:", language);

i18next.use(initReactI18next).init({
  resources,

  lng: language,

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
