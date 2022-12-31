import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import zh from "./lang/zh.json";

i18n.use(initReactI18next).init({
  resources: {
    en,
    zh
  },
  lng: "en",
  fallbackLng: "en"
});

export default i18n;
