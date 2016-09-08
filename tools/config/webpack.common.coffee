webpack = require 'webpack'
HtmlWebpackPlugin = require 'html-webpack-plugin'
ExtractTextPlugin = require 'extract-text-webpack-plugin'

helpers = require '../utils/helpers'

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      }, {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }, {
        test: /\.(txt|ico)$/,
        loader: 'file'
      }, {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      }, {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug'
    })
  ]
}
