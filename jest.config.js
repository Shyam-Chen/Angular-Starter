switch (process.env.TEST_ENV) {
  case 'app':
    module.exports = {
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/src/test.ts',
      globals: {
        'ts-jest': {
          'tsConfigFile': 'tsconfig.spec.json'
        },
        __TRANSFORM_HTML__: true
      }
    };
    break;
  case 'api':
    module.exports = {

    };
    break;
  default:
    module.exports = {};
}
