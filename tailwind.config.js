/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: {
      mw: '360px',
      fh: '500px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('~/static/img/Hero.svg')",
        'hero-pattern2': "url('~/static/img/Hero2.svg')",
        'hero-pattern3': "url('~/static/img/MobileHeroMain.png')",
        'item1': "url('~/static/img/item1.png')",
        'item2': "url('~/static/img/item2.png')",
        'item3': "url('~/static/img/item3.png')",
        'item4': "url('~/static/img/item4.png')",
        'item5': "url('~/static/img/item5.png')",
        'results': "url('~/static/img/results.png')",
        'resultsMobile': "url('~/static/img/resultsMobile.png')",
      },
      colors: {
        'header-color': 'rgba(155, 152, 138, 1)',
        'footer-color': 'rgba(206, 173, 141, 1)',
        'body-color': '#D7C0AA',
        'hero-orange': '#FF8F66',
        'hero-gray': '#666666',
        'hero-blue': '#6666FF',
        'item-line': '#EDB259',
        'managment-item-background': '#F9F1F1',
        'results-container': 'rgba(217, 217, 217, 0.2)'
      },
      padding: {
        '53px': '53px',
        '40px': '40px',
        '143px': '143px',
      },
      maxWidth: {
        '110': '110px',
        '300': '300px',
        '370': '370px',
        '220': '220px',
        '268': '254px',
        '580': '580px',
        '90' : '90%',
      },
      height: {
        '90': '90px',
        '167': '167px',
        '90p': '90%',
        '95p': '95%',
        '75p': '75%',
        '307': '307px',
        '411': '411px',
        '456': '456px',
        '540': '540px',
        '680': '680px',
        '800': '800px',
        '1200': '1200px',
        'min': 'min-content',
        '50v': '50vh',
      },
      minHeight: {
        '90p': '90%',
        '95p': '95%',
      },
      spacing: {
        '90px': '90px',
        '161px': '105%',
        '230px': '230px',
        '240px': '240px',
        '120px': '120px',
        '90p': '90%',
        '40px': '40px',
        '36px': '36px',
        '20px': '20px',
        '30px': '30px',
        '313px': '313px',
        '53px': '53px',
        '63px': '63px',
        '60px': '60px',
        '44px': '44px',
        '7px': '7px',
        '27': '27%',
        '14.5': '14.5%',
        '47.5': '47.5%',
      },
      fontSize: {
        '40': '40px',
        '48': '48px',
        '72': '72px',
        '32': '32px',
        '220': '220px',
        '140': '140px',
        '24': ['24px', '32px'],
      },
    },
    container: {
      center: true,
    },
    borderRadius: {
      DEFAULT: '10px'
    }
  },
  plugins: [],
}
