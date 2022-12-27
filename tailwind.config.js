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
    },
  },

  plugins: [],
  important: true,
};
