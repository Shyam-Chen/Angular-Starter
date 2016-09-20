const tsNode = require('ts-node');
const jasmineSpecReporter = require('jasmine-spec-reporter');

declare const jasmine: any;
declare const browser: any;

export const config: any = {
  directConnect: true,
  specs: ['./src/app/**/*.e2e-spec.ts'],
  exclude: [],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['no-sandbox']
    }
  },
  baseUrl: 'http://localhost:9876/',
  beforeLaunch() {
    tsNode.register();
  },
  onPrepare() {
    const SpecReporter = jasmineSpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: true }));
    browser.ignoreSynchronization = false;
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: false,
    showColors: true,
    includeStackTrace: false
  },
  useAllAngular2AppRoots: true
};
