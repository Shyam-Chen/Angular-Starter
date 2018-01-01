switch (process.env.TEST_ENV) {
  case 'app':
    module.exports = {
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/src/test.ts'
    };
    break;
  case 'api':
    module.exports = {};
    break;
  default:
    module.exports = {};
}
