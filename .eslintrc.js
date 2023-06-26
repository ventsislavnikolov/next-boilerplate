module.exports = {
  env: {
    jest: true,
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  plugins: ['react', 'jsx-a11y', 'jest', 'jest-dom', 'testing-library', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  rules: {
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-import-module-exports': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
