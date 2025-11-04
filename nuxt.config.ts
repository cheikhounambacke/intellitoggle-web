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
  app: {
    baseURL: "/intellitoggle-web/", // your GitHub repo name
    buildAssetsDir: "assets",
    head: {
      title: "Welcome To Intellitoglle ",
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "24x24",
          href: "/favicon-24x24.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon-48x48.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/favicon-96x96.png",
        },
      ],
    },
  },
});
