module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://5e73e519be8c5400165c3e6d.mockapi.io/',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  "transpileDependencies": [
    "vuetify"
  ],
}
