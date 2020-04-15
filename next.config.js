const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImage = require('next-images');

const config = {
  distDir: '__next',
  webpackDevMiddleware: config => ({
    ...config,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    },
  }),
};

module.exports = withPlugins(
  [
    [
      withImage,
      {
        esModule: true,
      },
    ],
    [
      withCSS,
      {
        cssLoaderOptions: {
          url: false,
        },
      },
    ],
  ],
  config,
);
