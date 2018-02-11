module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {},
  },
  env: {
    mocha: true,
  },
  plugins: ['prettier'],
  extends: ['standard', 'prettier'],
  rules: {
    camelcase: 0,
    'prettier/prettier': 'error',
    'prefer-promise-reject-errors': 0,
  },
};
