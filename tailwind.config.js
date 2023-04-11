/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
  content: ['./src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
=======
=======
>>>>>>> eb54f364b62a60121ed18da7083c24bb2d7d0b4c
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
<<<<<<< HEAD
>>>>>>> eb54f36 (update box)
=======
>>>>>>> eb54f364b62a60121ed18da7083c24bb2d7d0b4c
}
