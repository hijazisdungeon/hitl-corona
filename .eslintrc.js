module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'import-helpers',
    'prettier',
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        alphabetize: { order: 'asc', ignoreCase: true },
        groups: [
          'module',
          '/^~/(?!layouts|components|pages|services|utils|assets|styles)/',
          '/^~/layouts/',
          '/^~/components/',
          '/^~/pages/',
          '/^~/(services|utils)/',
          '/^~/assets/',
          '/^~/styles/',
          ['parent', 'sibling', 'index'],
          '/([.]{1,})/styles$/',
        ],
      },
    ],
  },
};
