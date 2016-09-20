Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');


let appContextRequire: any = require;
let appContext = appContextRequire.context('./src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

let coreTesting = require('@angular/core/testing');
let platformBrowserDynamic = require('@angular/platform-browser-dynamic/testing');

coreTesting.TestBed.initTestEnvironment(platformBrowserDynamic.BrowserDynamicTestingModule, platformBrowserDynamic.platformBrowserDynamicTesting());
