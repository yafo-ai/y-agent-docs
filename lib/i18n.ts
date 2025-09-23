import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'cn',
  languages: ['en', 'cn'],
  hideLocale: 'default-locale',
  parser: 'dir',
});