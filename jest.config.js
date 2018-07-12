switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-app.ts',
      transform: {
        '^.+\\.(ts)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
      },
      globals: {
        'ts-jest': {
          'tsConfigFile': 'tsconfig.app.json',
        },
        __TRANSFORM_HTML__: true,
      }
    };
    break;

  case 'api':
    module.exports = {
      transform: {
        '^.+\\.ts$': 'ts-jest',
      },
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    };
    break;

  case 'e2e':
    module.exports = {
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-e2e.ts',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '.*\\.spec.ts$',
      ],
      transform: {
        '^.+\\.ts$': 'ts-jest',
      },
    };
    break;

  default:
    module.exports = {};
}
