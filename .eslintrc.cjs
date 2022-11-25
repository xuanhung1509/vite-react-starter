module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'prettier'],
  rules: {
    'no-shadow': 'warn',
    'no-unused-vars': 'warn',
    'no-nested-ternary': 'warn',
    'arrow-body-style': 'warn',
    'import/order': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
