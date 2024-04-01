export default {
  './src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['pnpm lint', 'pnpm prettier'],
  './tests/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['pnpm lint', 'pnpm prettier'],
  './messages/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['pnpm lint', 'pnpm prettier'],
};
