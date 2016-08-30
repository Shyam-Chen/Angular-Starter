webpackMerge = require 'webpack-merge'
ExtractTextPlugin = require 'extract-text-webpack-plugin'
BrowserSyncPlugin = require 'browser-sync-webpack-plugin'

commonConfig = require './webpack.common'
helpers = require '../utils/helpers'

module.exports = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('public'),
    publicPath: 'http://localhost:3001/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:3001/'
      }, {
        reload: false
      }
    )
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
})
