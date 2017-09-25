const { join } = require('path');
const webpack = require('webpack');

const { SOURCE_ROOT, TEST_PORT } = require('../constants');

module.exports = config => {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'src/test.ts', watched: false }
    ],
    exclude: [],
    preprocessors: {
      'src/test.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loaders: [
              {
                loader: 'awesome-typescript-loader',
                options: { configFileName: join(__dirname, 'tsconfig.spec.json') }
              },
              'angular2-template-loader'
            ]
          }, {
            test: /\.html$/,
            loader: 'html-loader'
          }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'null-loader'
          }, {
            test: /\.css$/,
            exclude: join(SOURCE_ROOT, 'app'),
            loader: 'null-loader'
          }, {
            test: /\.css$/,
            include: join(SOURCE_ROOT, 'app'),
            loader: 'raw-loader'
          }
        ]
      },
      plugins: [
        new webpack.ContextReplacementPlugin(
          /angular(\\|\/)core(\\|\/)@angular/,
          SOURCE_ROOT,
          {}
        )
      ]
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: TEST_PORT,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Headless-Chrome'],
    customLaunchers: {
      'Headless-Chrome': {
        base: 'Chrome',
        flags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222']
      }
    },
    singleRun: true,
    concurrency: Infinity
  });
};
