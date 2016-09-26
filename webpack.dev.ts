const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

import { commonConfig } from './webpack.common';

export = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: './public',
    publicPath: 'http://localhost:2999/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:2999/'
    }, {
      reload: false
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
