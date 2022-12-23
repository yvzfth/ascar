/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },

  plugins: [],
  important: true,
  variants: {
    height: ['responsive', 'hover', 'first'],
    widtht: ['responsive', 'hover', 'first'],
    background: ['responsive', 'hover', 'first'],
  },
};
