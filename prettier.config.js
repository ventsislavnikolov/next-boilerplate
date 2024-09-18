/* eslint-disable import/no-anonymous-default-export */
/** @type {import("prettier").Options} */
export default {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  tailwindConfig: './tailwind.config.ts',
  trailingComma: 'all',
  useTabs: false,
};
