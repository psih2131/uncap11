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
  ],

  runtimeConfig: {
    nowpaymentsApiKey: process.env.NUXT_NOWPAYMENTS_API_KEY,
    nowpaymentsApiKeyDev: process.env.NUXT_NOWPAYMENTS_API_KEY_DEV,
    ipnCallbackBaseUrl: process.env.NUXT_IPN_CALLBACK_BASE_URL || '',
    sandboxMode: process.env.NUXT_SANDBOX_MODE ?? '',

    ipnApiKeyDev: process.env.NUXT_IPN_API_KEY_DEV ?? '',
    ipnApiKeyProd: process.env.NUXT_IPN_API_KEY_PROD ?? '',

    urlProdStatus: process.env.NUXT_URL_PROD_STATUS ?? '',
    
    siteUrlDev: process.env.NUXT_SITE_URL_DEV ?? '',
    siteUrlProd: process.env.NUXT_SITE_URL_PROD ?? '',

    urlApiStrapiDev: process.env.NUXT_API_URL_DEV ?? '',
    urlApiStrapiProd: process.env.NUXT_API_URL_PROD ?? '',

    public: {
      urlProdStatus: process.env.NUXT_URL_PROD_STATUS ?? '',
      urlApiStrapiDev: process.env.NUXT_API_URL_DEV ?? '',
      urlApiStrapiProd: process.env.NUXT_API_URL_PROD ?? '',
    }
  }
})
