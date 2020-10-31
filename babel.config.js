const { resolve } = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: resolve(__dirname, 'src'),
      },
    ],
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};
