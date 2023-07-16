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
    'import/prefer-default-export': 'off', // TODO: Remove this rule and fix all imports
    'global-require': 'off', // TODO: Remove this rule and fix all require types
    'react/prop-types': 'off', // TODO: Remove this rule and fix all prop types
    'import/extensions': 'off', // TODO: Remove this rule and fix all imports
    'import/no-unresolved': 'off', // TODO: Remove this rule and fix all imports
    'react/react-in-jsx-scope': 'off', // TODO: Remove this rule and fix all react imports
    'import/no-import-module-exports': 'off', // TODO: Remove this rule and fix all import types
    '@typescript-eslint/no-var-requires': 'off', // TODO: Remove this rule and fix all require types
    'consistent-return': 'off', // TODO: Remove this rule and fix all return types
    '@typescript-eslint/no-explicit-any': 'off', // TODO: Remove this rule and fix all any types
    '@typescript-eslint/no-empty-function': 'off', // TODO: Remove this rule and fix all empty functions
    'react/destructuring-assignment': 'off', // TODO: Remove this rule and fix all destructuring assignments
    'react/function-component-definition': 'off', // TODO: Remove this rule and fix all function components
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
