tsNode = require 'ts-node'
jasmineSpecReporter = require 'jasmine-spec-reporter'

class Config
  @directConnect: true
  @specs: ['./src/**/*.e2e-spec.ts']
  @exclude: []
  @capabilities:
    browserName: 'chrome'
  @baseUrl: 'http://localhost:9876/'
  @beforeLaunch: ->
    tsNode.register project: 'e2e'
  @onPrepare: ->
    SpecReporter = jasmineSpecReporter
    jasmine.getEnv().addReporter new SpecReporter displayStacktrace: true
    browser.ignoreSynchronization = false
  @framework: 'jasmine'
  @jasmineNodeOpts:
    isVerbose: false
    showColors: true
    includeStackTrace: false
  @useAllAngular2AppRoots: true

if process.env.TRAVIS
  Config.capabilities = browserName: 'firefox'

exports.config = Config
