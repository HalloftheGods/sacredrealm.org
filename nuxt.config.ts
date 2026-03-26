// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Sacred Realm — Rediscovering the Golden Land within our world.' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages'
  },
  future: {
    compatibilityVersion: 4
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint'
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
