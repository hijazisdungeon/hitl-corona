module.exports = {
  extends: ['@hitechline/eslint-config/web'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'react/no-danger': 'off',
  },
};
