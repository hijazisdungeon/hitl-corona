const bundleAnalyzer = require('@next/bundle-analyzer');
const sourceMaps = require('@zeit/next-source-maps');
const composePlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = composePlugins(
  [
    [optimizedImages],
    [sourceMaps],
    [
      bundleAnalyzer,
      {
        enabled: !!process.env.ANALYZE,
      },
    ],
  ],
  {
    distDir: '__next',
    devIndicators: {
      autoPrerender: false,
    },
  },
);
