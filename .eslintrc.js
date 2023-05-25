module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['jsx-a11y'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'warn', // remove this error due to old next/link syntax
    'jsx-a11y/anchor-ambiguous-text': [
      'error',
      {
        words: [
          'lenke',
          'klikk',
          'klikk her',
          'les',
          'les mer',
          'les her',
          'les mer her',
          'se',
          'se mer',
          'se mer her',
          'her',
          'mer',
        ],
      },
    ],
  },
  settings: {
    'jsx-a11y': {
      components: {
        Link: 'a',
      },
    },
  },
};
