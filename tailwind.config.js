/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
=======
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
    colors: {
      softblue: '#F6F8FF',
      hoverblue: '#93AAF8',
      fontblue: '#7292FF',
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
>>>>>>> eb54f36 (update box)
}
