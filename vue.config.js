const CompressionPlugin = require("compression-webpack-plugin")
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ?
    '/fds' : '/',
  outputDir: 'fds',
  productionSourceMap: false,
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionPlugin({
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        deleteOriginalAssets: false
      }))
    }
  }
}