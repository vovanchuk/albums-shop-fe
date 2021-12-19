export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    backendUrl: process.env.BACKEND_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.scss',
    'tui-image-editor/dist/tui-image-editor.css',
    'vue-advanced-cropper/dist/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/tui-editor.js', mode: 'client' },
    { src: '~/plugins/drag-resize.js', mode: 'client' },
    { src: '~/plugins/cropper.js', mode: 'client' },
    { src: '~/plugins/ck-editor.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  bootstrapVue: {
    icons: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    baseURL: process.env.BACKEND_URL || 'http://localhost:8000'
  },
  auth: {
    redirect: {
      login: '/login',
      logout: false,
      callback: false,
      home: false
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          type: 'Bearer'
        },
        user: {
          property: '',
          autoFetch: true
        },
        endpoints: {
          login: {url: '/api/auth/login', method: 'post', propertyName: 'access_token'},
          user: {url: '/api/auth/user-profile', method: 'get', propertyName: false},
          logout: false
        }
      }
    }
  },
}
