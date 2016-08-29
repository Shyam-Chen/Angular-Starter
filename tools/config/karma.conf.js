const webpackConfig = require('./webpack.test');

module.exports = function(config) {
  let _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './tools/utils/test-shim.js', watched: false }
    ],
    preprocessors: {
      './tools/utils/test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: false,
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: ['Chrome_no_sandbox'],
    singleRun: true
  };

  config.set(_config);
};
