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
    '@nuxt/eslint',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-14KNJCX950'
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  sourcemap: false,
  vite: {
    $client: {
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.message && warning.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(warning);
          },
          onLog(level, log, defaultHandler) {
            if (log.message && log.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(level, log);
          }
        }
      }
    },
    $server: {
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.message && warning.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(warning);
          },
          onLog(level, log, defaultHandler) {
            if (log.message && log.message.includes('Sourcemap is likely to be incorrect')) return;
            defaultHandler(level, log);
          }
        }
      }
    }
  }
})
