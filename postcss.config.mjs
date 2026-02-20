// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    // NO autoprefixer here – Tailwind v4 handles prefixing internally if needed
  },
};
