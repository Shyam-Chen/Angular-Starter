class Config
  @directConnect: true
  @specs: ['dist/dev/**/*.e2e.js']
  @exclude: []
  @capabilities:
    browserName: 'chrome'
  @baseUrl: 'http://localhost:3000/'
  @onPrepare: ->
    SpecReporter = require 'jasmine-spec-reporter'
    jasmine.getEnv().addReporter new SpecReporter displayStacktrace: true
    browser.ignoreSynchronization = false
  @framework: 'jasmine'
  @jasmineNodeOpts:
    isVerbose: false
    showColors: true
    includeStackTrace: false
  @useAllAngular2AppRoots: true

exports.config = Config
