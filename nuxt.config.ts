// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
  ],
  fonts: {
    // Override default font behaviour
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: [400, 500, 600, 700],
        styles: ["normal"], // if you’re using italics you can add
        display: "swap",
      },
    ],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
