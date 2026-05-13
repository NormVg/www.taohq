// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo', 'motion-v/nuxt'],

  site: {
    url: 'https://www.taohq.org',
    name: 'TheAlphaOnes',
    description: 'An independent umbrella organisation behind developer tools, software products, and experimental systems.',
    defaultLocale: 'en',
    indexable: true,
  },

  // Robots — full access
  robots: {
    blockAiBots: false,
    blockNonSeoBots: false,
  },

  // Sitemap — single page site
  sitemap: {
    zeroRuntime: true,
  },

  // OG Image — dynamic via nuxt-og-image
  ogImage: {
    defaults: {
      width: 1200,
      height: 630,
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
