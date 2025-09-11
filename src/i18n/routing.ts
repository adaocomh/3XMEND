import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es'],
 
  pathnames: {
    "/sobre": {
      pt: "/sobre",
      en: "/about",
      es: "/en"
    }
  },
  // Used when no locale matches
  defaultLocale: 'pt'
});