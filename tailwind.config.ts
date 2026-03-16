import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // This is the crucial line
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ... rest of config
};
export default config;
