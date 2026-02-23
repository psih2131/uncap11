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
    // nowpaymentsApiKey: process.env.NUXT_NOWPAYMENTS_API_KEY,
    // nowpaymentsApiKeyDev: process.env.NUXT_NOWPAYMENTS_API_KEY_DEV,
    // ipnCallbackBaseUrl: process.env.NUXT_IPN_CALLBACK_BASE_URL || '',
    // sandboxMode: process.env.NUXT_SANDBOX_MODE ?? '',

    // ipnApiKeyDev: process.env.NUXT_IPN_API_KEY_DEV ?? '',
    // ipnApiKeyProd: process.env.NUXT_IPN_API_KEY_PROD ?? '',

    // urlProdStatus: process.env.NUXT_URL_PROD_STATUS ?? '',
    
    // siteUrlDev: process.env.NUXT_SITE_URL_DEV ?? '',
    // siteUrlProd: process.env.NUXT_SITE_URL_PROD ?? '',

    // urlApiStrapiDev: process.env.NUXT_API_URL_DEV ?? '',
    // urlApiStrapiProd: process.env.NUXT_API_URL_PROD ?? '',


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
    // public: {
    //   urlProdStatus: process.env.NUXT_URL_PROD_STATUS ?? '',
    //   urlApiStrapiDev: process.env.NUXT_API_URL_DEV ?? '',
    //   urlApiStrapiProd: process.env.NUXT_API_URL_PROD ?? '',
    // }
  }
})
