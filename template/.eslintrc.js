module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true, // for Promise
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
