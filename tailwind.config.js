/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/hero.jpg')",
      },
      boxShadow: {
        custom: '0px 0px 4px 0.5px #34d399',
      },
    },
  },

  plugins: [],
  important: true,
};
