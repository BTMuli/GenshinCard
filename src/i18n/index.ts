/**
 * @file i18n/index.ts
 * @description Exports the i18n plugin for Vue.
 * @since v0.1.0-alpha
 */

import enUS from "./en-US";
import zhCN from "./zh-CN";
import { createI18n } from "vue-i18n";

const messages = {
  en: enUS,
  zh: zhCN,
};

const language = (navigator.language || "en").toLocaleLowerCase();
const locale = language.split(/[-_]/)[0];
const fallback = "en";
const i18n = createI18n({
  locale: localStorage.getItem("lang") || locale || fallback,
  fallbackLocale: fallback,
  messages,
  legacy: false,
  globalInjection: true,
});

export default i18n;
