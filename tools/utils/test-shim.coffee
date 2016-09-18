Error.stackTraceLimit = Infinity

require('core-js')

require('zone.js/dist/zone')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/sync-test')
require('zone.js/dist/jasmine-patch')
require('zone.js/dist/async-test')
require('zone.js/dist/fake-async-test')

appContext = require.context('../../src', true, /\.spec\.ts/)

appContext.keys().forEach(appContext)

testing = require('@angular/core/testing')
browser = require('@angular/platform-browser-dynamic/testing')

testing
  .TestBed
  .initTestEnvironment(
    browser.BrowserDynamicTestingModule,
    browser.platformBrowserDynamicTesting()
  )
