
export default {
  mode: 'spa',
  srcDir: 'client/',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  dev: (process.env.NODE_ENV !== 'production'),
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/scss/app.scss', lang: 'sass' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/scss/foundation/**', // 読みませたいscssファイルを指定します。
      '~/assets/scss/layout/**',
      '~/assets/scss/object/component/**',
      '~/assets/scss/object/project/**',
      '~/assets/scss/object/utility/**'
    ]
  },
  proxy: {
    '/api': (this.dev) ? 'http://tanonder.test' : 'https://tanonder.heroku.com'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    dir: 'public/dist'
  }
}
