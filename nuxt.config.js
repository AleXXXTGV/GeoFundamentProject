export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GeoFundamentProject',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'Icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    /* module options */
    locales: [
    {
      code: 'en',
      name: 'EN'
    },
    {
      code: 'ru',
      name: 'RU'
    },
    {
      code: 'uz',
      name: 'UZ'
    }
  ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          headerLinks: {
            main: 'Main',
            conference: 'Conference',
            about: 'About us',
          },
          languages: {
            ru: 'RU',
            en: 'EN',
            uz: 'UZ',
          }
        },
        ru: {
          headerLinks: {
            main: 'Главная',
            conference: 'Конференция',
            about: 'О нас',
          },
          languages: {
            ru: 'RU',
            en: 'EN',
            uz: 'UZ',
          }
        },
        uz: {
          headerLinks: {
            main: 'Uy',
            conference: 'Konferensiya',
            about: 'Biz haqimizda',
          },
          languages: {
            ru: 'RU',
            en: 'EN',
            uz: 'UZ',
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
