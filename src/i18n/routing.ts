import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
 
  pathnames: {
    "/": {
      pt: "/",
      en: "/",
      es: "/"
    },
    "/sobre": {
      pt: "/sobre",
      en: "/about",
      es: "/sobre"
    }
  },
  defaultLocale: 'pt'
});