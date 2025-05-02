const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: '../../../../target/classes/static/vue-cli-project',
  publicPath: '/w/',
  devServer: {
    open: '/w/',
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ROUTER_BASE: '"/w/"'
        }
      })
    ]
  }
});