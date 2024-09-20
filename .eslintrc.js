module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    '@heyllog/eslint-config/react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',

    // redux-toolkit uses immer and params reassign quite often
    'no-param-reassign': ['warn', { 'props': false }],

    // useEffect return function
    'consistent-return': 'off',

    'arrow-body-style': 'off',

    // for StyleSheets in the end of the file
    '@typescript-eslint/no-use-before-define': 'off',
    'react/style-prop-object': 'off',

    // for expo _layout file, regex accepts kebab-case and _layout filenames
    'filename-rules/match': [2, '/^([a-z]+-)*[a-z]+(?:\\..*)?$|^_layout+(?:\\..*)?$/'],

    // for assets require
    'global-require': 'off',
  },
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js', '*.config.js'],
}
