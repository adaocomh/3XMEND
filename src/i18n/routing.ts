import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
 
  pathnames: {
    "/sobre": {
      pt: "/sobre",
      en: "/about",
      es: "/en"
    }
  },
  defaultLocale: 'pt'
});