// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n'],
  srcDir: 'src',
  i18n: {
    defaultLocale: 'en',
    langDir: 'locale',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'en.ts',
      },
    ],
    strategy: 'prefix_except_default',
    vueI18n: './i18n.config.ts',
  },

})
