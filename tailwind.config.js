/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    extend: {
      colors: {
        'header-color': 'rgba(155, 152, 138, 1)',
        'footer-color': 'rgba(206, 173, 141, 1)',
      },
      padding: {
        '53px': '53px',
        '40px': '40px',
        '143px': '143px',
      },
      maxWidth: {
        '110': '110px',
      },
    },
    container: {
      center: true,
    },
    height: {
      '90': '90px'
    },
  },
  plugins: [],
}
