/* eslint-disable import/no-anonymous-default-export */
export default {
  './messages/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['pnpm lint', 'pnpm format'],
  './src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['pnpm lint', 'pnpm format'],
  './tests/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['pnpm lint', 'pnpm format'],
};
