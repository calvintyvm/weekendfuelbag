const _ = require('lodash');
const routes = require('../src/routes');
const path = require('path');
const fs = require('fs');
const appConfig = require('../src/config/app.conf');

const generate = function() {
  let generatedRoutes = routes;
  let locales = fs
    .readdirSync(path.resolve('src/config/locales'))
    .filter(v => !/(^|\/)\.[^/.]/g.test(v))
    .map(val => path.basename(val, '.js'));

  // If there is only one locale, that is the default and therefore does not
  // need to be considered.
  if (locales.length <= 1) {
    locales = [];
  }
  // Strip the default locale from the locale array. We don't need
  // to generate a prerendered path prefixed with the default locale.
  else {
    locales = locales.filter(locale => locale !== appConfig.defaultLocale);
  }

  // Generate localized routes for each supported locale if there are multiple
  // supported locales.
  if (locales.length > 0) {
    let localizedRoutes = locales.map(locale => {
      return _.cloneDeep(routes).map(route => {
        route.path = `/${locale}${route.path}`;
        return route;
      });
    });
    // Merge the base routes and the localized routes.
    generatedRoutes = _.flatten(generatedRoutes.concat(localizedRoutes));
  }

  // Finally, add the wildcard route at the end to redirect to 404 page.
  if (fs.existsSync(path.resolve('src/pages', 'NotFound.js'))) {
    generatedRoutes.push({
      path: '*',
      component: 'pages/NotFound',
    });
  }

  return generatedRoutes;
};

exports.generate = generate;
