import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
    css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
  devtools: { enabled: true },
   vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@pinia/nuxt']
})