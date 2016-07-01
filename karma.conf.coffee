class Config
  @basePath: './'
  @frameworks: ['jasmine']
  @files: [
    'node_modules/core-js/client/shim.min.js'
    'node_modules/systemjs/dist/system.src.js'

    'node_modules/zone.js/dist/zone.js'
    'node_modules/zone.js/dist/jasmine-patch.js'
    'node_modules/zone.js/dist/async-test.js'
    'node_modules/zone.js/dist/fake-async-test.js'

    {
      pattern: 'node_modules/rxjs/**/*.js'
      included: false, watched: false
    }
    {
      pattern: 'node_modules/rxjs/**/*.js.map'
      included: false, watched: false
    }

    {
      pattern: 'node_modules/@angular/**/*.js'
      included: false, watched: true
    }
    {
      pattern: 'node_modules/@angular/**/*.js.map'
      included: false, watched: true
    }

    'test-main.js'

    # ...
  ]
  @exclude: []
  @reporters: ['mocha']
  @port: 9876
  @colors: true
  @autoWatch: true
  @browsers: ['Chrome']
  @singleRun: false
  @concurrency: Infinity

if process.env.TRAVIS
  Config.browsers = ['Firefox']
  Config.singleRun = true

module.exports = (config) -> config.set Config
