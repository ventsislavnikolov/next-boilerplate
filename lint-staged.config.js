export default {
  './app/**/*.{ts,tsx}': ['pnpm lint', 'pnpm prettier:write'],
  './components/**/*.{ts,tsx}': ['pnpm lint', 'pnpm prettier:write'],
};
