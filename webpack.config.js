const { join } = require('path');
const { AotPlugin } = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');

const BACKEND_CONFIG = {
  entry: './src/backend/main.server.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'server.js'
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: '@ngtools/webpack',
      }
    ]
  }
};

const WEB_CONFIG = webpackMerge({}, BACKEND_CONFIG, {
  entry:  './src/web/main.browser.ts',
  output: {
    filename: 'client.js'
  },
  target: 'web'
});

module.exports = [WEB_CONFIG, BACKEND_CONFIG];
