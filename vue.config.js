module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://jsonbox.io/box_73b658bf7833ece90ddb',
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
