// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/plausible",
    '@nuxtjs/supabase',
    '@nuxtjs/turnstile'
  ],
  plausible: {
    apiHost: 'https://plausible.jeremiahjason.com'
  },
  supabase:{
    redirect: false
  },
  turnstile: {
    siteKey: '0x4AAAAAAA2Rm_69x5EzQjXj'
  }
})