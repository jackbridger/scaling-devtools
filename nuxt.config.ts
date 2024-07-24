// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://scalingdevtools.com',
    name: 'Scaling DevTools',
    description: 'Interviews with the world\'s best DevTools startups. Learn from the founders of companies like PostHog, Supabase and WorkOS.',
    defaultLocale: 'en',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-schema-org"]
})
