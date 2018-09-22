import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';

let locales = require.context('src/config/locales', true, /^.*\.js/);
let translations = {};

locales.keys().forEach(path => {
  const basename = path.replace(/^.*[\\\/]/, '').replace(/\.js$/, ''); // eslint-disable-line no-useless-escape
  translations[basename] = {
    translation: locales(path).default,
  };
});

i18next.use(reactI18nextModule).init({
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: 'en',
  resources: translations,
});

export default i18next;
