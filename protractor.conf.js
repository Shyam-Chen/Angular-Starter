const { join } = require('path');
const { SpecReporter } = require('jasmine-spec-reporter');

const { TEST_PORT } = require('./gulpfile');

exports.config = {
  directConnect: true,
  specs: [
    'src/**/*.e2e-spec.ts'
  ],
  exclude: [],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['--no-sandbox', '--headless', '--disable-gpu', '--window-size=1280,720']
    }
  },
  baseUrl: `http://localhost:${TEST_PORT}`,
  onPrepare() {
    require('ts-node').register({
      project: join(__dirname, 'tsconfig.e2e-spec.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    print() {}
  }
};
