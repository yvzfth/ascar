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
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow: {
        // "--tw-shadow": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)" ,
        // "--tw-shadow-colored": "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
        // "box-shadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important",
        custom: '0px 0px 3px 0.5px #34d399;',
      },
    },
  },

  plugins: [],
  important: true,
};
