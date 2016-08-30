webpack = require 'webpack'
webpackMerge = require 'webpack-merge'
ExtractTextPlugin = require 'extract-text-webpack-plugin'

commonConfig = require './webpack.common'
helpers = require '../utils/helpers'

ENV = process.env.NODE_ENV = process.env.ENV = 'production'

module.exports = webpackMerge(commonConfig, {
  output: {
    path: helpers.root('public'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
})
