module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true, // for Promise
  },
};
