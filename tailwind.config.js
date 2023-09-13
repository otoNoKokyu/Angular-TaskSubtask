/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },

  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{
      'sm': '320px',
      'md': '500px'
    },
    extend: {
      width: {
        '98.5': '98.4%',
      },
    },
  },

  plugins: [],
}