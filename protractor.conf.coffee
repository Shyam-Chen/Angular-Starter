class Config
  @directConnect: true
  @specs: ['./src/**/*.e2e.js']
  @exclude: []
  @capabilities:
    browserName: 'chrome'
  @baseUrl: 'http://localhost:9876/'
  @onPrepare: ->
    SpecReporter = require 'jasmine-spec-reporter'
    jasmine.getEnv().addReporter new SpecReporter displayStacktrace: true
    browser.ignoreSynchronization = true
  @framework: 'jasmine'
  @jasmineNodeOpts:
    isVerbose: false
    showColors: true
    includeStackTrace: false
  @useAllAngular2AppRoots: true

if process.env.TRAVIS
  Config.capabilities = browserName: 'firefox'

exports.config = Config
