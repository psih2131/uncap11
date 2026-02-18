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
})
