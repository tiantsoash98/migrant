// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: https://ogp.me/ns#'
      },
    }
  },
  css: ['~/assets/css/main.scss'],
  modules: [
    '@nuxt/image',
  ],
  build: {
    transpile: ['gsap'],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    }
  },
})