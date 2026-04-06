/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.{js,ts}",
    "./css/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('daisyui')
  ],
}
