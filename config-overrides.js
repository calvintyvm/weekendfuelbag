const path = require('path');
const fs = require('fs');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireDefinePlugin = require('react-app-rewire-define-plugin');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const routes = require('./utils/routes');
const appConfig = require('./src/config/app.conf.js');

module.exports = (config, env) => {
  config = rewireReactHotLoader(config, env);
  // Define alias
  config.resolve.alias = {
    ...config.resolve.alias,
    src: path.resolve('src'),
    components: path.resolve('src/components'),
    pages: path.resolve('src/pages'),
  };

  // Define globals
  const generatedRoutes = routes.generate();
  const locales = fs
    .readdirSync(path.resolve('src/config/locales'))
    .filter(v => !/(^|\/)\.[^/.]/g.test(v))
    .map(val => path.basename(val, '.js'));
  config = rewireDefinePlugin(config, env, {
    'process.env.__LOCALES__': JSON.stringify(locales),
    'process.env.__ROUTES__': JSON.stringify(generatedRoutes),
  });

  // generated class names includes the components' name
  config = rewireStyledComponents(config, env);

  // Handle prerender
  if (env === 'production' && appConfig.prerender) {
    const pathsToPrerender = generatedRoutes
      .map(route => {
        // translate "*" to 404 page
        if (route.path === '*') return '/404';
        // ignore routes with params
        if (~route.path.indexOf(':')) {
          return undefined;
        }
        // return the path of the route
        return route.path;
      })
      .filter(route => route);

    config.plugins.push(
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'build'),
        routes: pathsToPrerender,
        // Optional minification.
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
        renderer: new Renderer({
          renderAfterTime: 100,
          injectProperty: '__PRERENDERING',
          inject: {},
        }),
      })
    );
  }

  return config;
};
