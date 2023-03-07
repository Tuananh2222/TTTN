export default defineNuxtConfig({
  // sourcemap: false,
  ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'Final Uni',
      meta: [],
      
      script: [
        {
          src: process.env.NUXT_PUBLIC_PAYGENT_TOKEN_JS_URL,
        },
        
      ]
    },
  },
  nitro: {
    serveStatic: true,
  },
  build: {
    transpile: [],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/general.scss"  as *;',
        },
      },
    },
    plugins: [],
  },
  hooks: {},
  css: ['@/assets/scss/index.scss', '@fortawesome/fontawesome-svg-core/styles.css'],

  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  imports: {
    dirs: ['stores', 'composables'],
  },
  modules: [
    // pinia plugin
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        //i18n options
        defaultLocale: '',
        locales: [''],
        vueI18n: {
          legacy: false,
          locale: '',
          messages: {},
        },
      },
    ],
    'nuxt-vuefire',
  ],
  components: {
    global: true,
    dirs: ['~/components/elements', '~/components/general'],
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '',
    // Keys within public are also exposed client-side
    public: {
      //setup in .env template
      apiUrl: '',
      apiTimeout: 30000,
      webUrl: '',
      googleMapKey: '',
      jreUrl: '',
      paygentMarchantId: '',
      paygentKey: '',
    },
  },
  vuefire: {
    config: {
      apiKey: 'AIzaSyCAjnSxmbji_Eig57IMEQ3Vyaq172GdZaU',
      authDomain: 'tttn-8ae05.firebaseapp.com',
      projectId: 'tttn-8ae05',
      storageBucket: 'tttn-8ae05.appspot.com',
      messagingSenderId: '59283673312',
      appId: '1:59283673312:web:027e0feb671b360d5e4085',
      measurementId: 'G-C2EYHRJ9KH',
    }
  }
})
