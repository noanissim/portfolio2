module.exports = {
   // chainWebpack: config => {
   //    config.module
   //       .rule('vue')
   //       .use('vue-loader')
   //       .loader('vue-loader')
   //       .tap(options => {
   //          // modify the options...
   //          return options
   //       })
   // },
   transpileDependencies: ['vuetify'],
   // publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
   publicPath: '/portfolio2/'
   // devServer: {
   //    host: '0.0.0.0',
   //    https: false,
   //    port: 8081,
   //    public: 'http://0.0.0.0:8081'
   // }
}
