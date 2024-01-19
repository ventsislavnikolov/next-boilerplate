export default {
	"./src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
	"./tests/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
	"./messages/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}": ["pnpm lint", "pnpm prettier:write"],
};
