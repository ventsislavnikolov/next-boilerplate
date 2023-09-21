import { white } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...white,
        error: '#e53e3e',
        primary: '#0275d8',
        success: '#38a169',
      },
      fontFamily: {
        title: ['Roboto'],
        text: ['Roboto'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
