/// <reference types="node" />
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-x1.png'
        }
      ]
    }
  },

  ssr: true,


  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/style/main.scss'],

  vite: {
    server: {
      allowedHosts: ['unsolacing-sharee-appointable.ngrok-free.dev']
    }
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-W5Q0K4R5CX',
  },

  runtimeConfig: {

    nuxt_bace_api_url: process.env.NUXT_BASE_API_URL,
    nuxt_nopayments_api: process.env.NUXT_NOWPAYMENTS_API,
    nuxt_inp_api_key: process.env.NUXT_IPN_API_KEY,
    nuxt_site_url: process.env.NUXT_SITE_URL,
    nuxt_api_back_url: process.env.NUXT_API_BACK_URL,

    mailHost: process.env.NUXT_MAIL_HOST ?? '',
    mailPort: process.env.NUXT_MAIL_PORT ?? '587',
    mailUser: process.env.NUXT_MAIL_USER ?? '',
    mailPass: process.env.NUXT_MAIL_PASS ?? '',
    mailFrom: process.env.NUXT_MAIL_FROM ?? '',

  }
})
