// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'node:url';

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1 maximum-scale=1',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          type: 'text/javascript',
          src: '/scripts/yametrika.js',
          async: true,
          defer: true,
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@zadigetvoltaire/nuxt-gtm',
    '@pinia/nuxt',
    '@ant-design-vue/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-icon',
    'nuxt-gtag',
    'nuxt3-meta-pixel'
  ],

  css: ['~/css/main.css'],

  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },

  gtag: {
    id: 'G-EN98N4N4Y6',
  },

  gtm: {
    id: 'GTM-KHBVXX9X',
    defer: false,
    compatibility: false,
    debug: true,
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: ['homepage'],
    trackOnNextTick: false,
    devtools: true,
  },

  tailwindcss: {
    config: {
      corePlugins: {
        preflight: true,
      },
    },
  },

  googleFonts: {
    families: {
      Montserrat: [400],
      Nunito: [400, 500, 700],
      'Exo 2': [400],
    },
  },

  robots: {
    configPath: '~/config/robots.config.js',
  },

  site: {
    url: 'https://detailing.8milya.kz/',
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '1087127369253782',
    autoPageView: true,
    disabled: false
  },

  compatibilityDate: '2024-12-15',
});