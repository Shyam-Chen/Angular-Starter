switch (process.env.TEST_ENV) {
  case 'app':
    module.exports = {
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/src/test.ts',
      globals: {
        'ts-jest': {
          'tsConfigFile': 'tsconfig.app.json'
        },
        __TRANSFORM_HTML__: true
      }
    };
    break;

  case 'api':
    module.exports = {
      transform: {
        '^.+\\.tsx?$': 'ts-jest'
      },
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
    };
    break;

  default:
    module.exports = {};
}
