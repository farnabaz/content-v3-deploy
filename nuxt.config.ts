import packageJson from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  runtimeConfig: {
    public: {
      builtAt: new Date().toISOString(),
      dependencies: packageJson.dependencies,
    }
  },
  content: {
    experimental: {
      nativeSqlite: true,
    }
  },
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
})
