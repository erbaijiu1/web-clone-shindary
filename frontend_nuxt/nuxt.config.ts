// https://nuxt.com/docs/api/configuration/nuxt-config
const siteCode = process.env.NUXT_PUBLIC_SITE_CODE || 'shindary'
const appBaseURL = process.env.NUXT_APP_BASE_URL || `/${siteCode}/`

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    viewer: false
  },
  app: {
    baseURL: appBaseURL,
    head: {
      title: 'Shindary Auto Parts',
      meta: [
        { name: 'description', content: 'Premium automotive parts supplier' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000',
      siteCode
    }
  }
})
