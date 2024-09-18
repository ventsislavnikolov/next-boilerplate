// TODO: NextJS issue with postcss.config.js - https://github.com/vercel/next.js/issues/47774, aslo check this for more info - https://github.com/postcss/postcss-load-config/pull/249
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
};
