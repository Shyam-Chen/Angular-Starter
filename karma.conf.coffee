webpackConfig = require './tools/config/webpack.test'

class Config
  @basePath: ''
  @frameworks: ['jasmine']
  @files: [
    pattern: './tools/utils/test-shim.coffee', watched: false
  ]
  @exclude: []
  @preprocessors:
    './tools/utils/test-shim.coffee': ['webpack', 'sourcemap']
  @webpack: webpackConfig
  @webpackMiddleware:
    stats: 'errors-only'
  @webpackServer:
    noInfo: true
  @reporters: ['mocha']
  @port: 9876
  @colors: true
  @autoWatch: false
  @customLaunchers:
    Chrome_no_sandbox:
      base: 'Chrome'
      flags: ['--no-sandbox']
  @browsers: ['Chrome_no_sandbox']
  @singleRun: true
  @concurrency: Infinity

module.exports = (config) -> config.set Config
