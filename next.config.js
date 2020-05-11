const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  distDir: '__next',
  devIndicators: {
    autoPrerender: false,
  },
});
