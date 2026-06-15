// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/device', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://taohq.org',
    name: 'TheAlphaOnes',
    description: 'Independent software, systems, and digital products designed to feel calm under pressure.',
    defaultLocale: 'en'
  },
  robots: {
    blockNonSeoBots: true
  },
  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7
    }
  }
})