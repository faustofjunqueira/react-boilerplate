import i18n from "i18next";
import moment from "moment";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { Environment } from "../config/environment";

export const i18nServices = {
  load() {
    return i18n
      .use(HttpApi)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init(Environment.i18nInitOptions);
  },

  setLang(lang: string) {
    return i18n.changeLanguage(lang)
      .then(t => moment.locale(t('moment.locale')));
  },
};
