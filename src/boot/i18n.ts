/**
 * @file boot/i18n.ts
 * @description Bootstraps the i18n plugin for Quasar.
 * @since v0.1.0-alpha
 */

import { boot } from "quasar/wrappers";

import messages from "src/i18n";
import i18n from "src/i18n";

export type MessageLanguages = keyof typeof messages;
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = (typeof messages)["en-US"];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "vue-i18n" {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-interface */

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n);
});
