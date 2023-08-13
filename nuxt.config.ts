// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }
})
module.exports = {
  app:{
    head: {
      title: 'Covid-19',
      link: [
        { rel: 'stylesheet', href: '/app/css/style.css' },
        { rel: 'icon', type: 'image/png', href: '/app/images/logo.jpg' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: "description", content: "Covid-19" },
        { 'http-equiv': 'cache-control', content: 'max-age=0' },
      ],
    }
  },
}