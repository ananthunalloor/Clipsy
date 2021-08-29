export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Clipsy - Twitch clip Downloader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Easily find and download your favorite clip or most memorable moments on Twitch.tv' },
      { name: 'keywords', content: 'Twitch clip download, twitch clip downloader, Twitch clips, download twitch clip, download clips, download twitch clips, how to download twitch clips, twitch clips download 2021'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    headers : {
      common: {
        'Authorization' : process.env.AUTH,
        'client-id' : process.env.CLIENT_ID,
      }
    },
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon:{
      source: '/icon.png',
      fileName: 'icon.png',
    },
    manifest: {
      lang: 'en',
      name: 'Clipsy - Twitch clip Downloader',
      short: 'Clipsy',
      description: 'Easily find and download your favorite clip or most memorable moments on Twitch.tv',
    },
    meta:{
      lang: 'en',
      name: 'Clipsy - Twitch clip Downloader',
      description: 'Easily find and download your favorite clip or most memorable moments on Twitch.tv',
      twitterCard: 'summary_large_image',
      twitterSite: 'clipsy',
      ogImage: '/icon.png'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  robots: {
    UserAgent: '*',
    Disallow: '/dev'
  },

  tailwindcss:{
    exposeConfig: true,
    cssPath: '~/assets/tailwind.css',
    configPath: '~/config/tailwind.js'
  },
}
