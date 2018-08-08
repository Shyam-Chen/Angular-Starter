switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/tools/',
      ],
      globals: {
        'ts-jest': {
          tsConfigFile: './tools/tsconfig.test.json',
        },
        __TRANSFORM_HTML__: true,
      },
      moduleFileExtensions: ['js', 'ts'],
      moduleNameMapper: {
        '~assets(.*)': '<rootDir>/src/assets$1',
        '~(.*)': '<rootDir>/src/app$1',
      },
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-app.ts',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '.*\\.e2e-spec.ts$',
      ],
      transform: {
        '^.+\\.ts$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
        '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': '<rootDir>/tools/assets-transform.js',
      },
    };
    break;

  case 'api':
    module.exports = {
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/tools/',
      ],
      globals: {
        'ts-jest': {
          tsConfigFile: './tools/tsconfig.test.json',
        },
      },
      moduleFileExtensions: ['js', 'ts'],
      moduleNameMapper: {
        '~(.*)': '<rootDir>/src/api$1',
      },
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-api.ts',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '.*\\.e2e-spec.ts$',
      ],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      transform: {
        '^.+\\.ts$': 'ts-jest',
      },
    };
    break;

  case 'e2e':
    module.exports = {
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/tools/',
      ],
      globals: {
        'ts-jest': {
          tsConfigFile: './tools/tsconfig.test.json',
        },
      },
      moduleFileExtensions: ['js', 'ts', 'json'],
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-e2e.ts',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '.*\\.spec.ts$',
      ],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      transform: {
        '^.+\\.ts$': 'ts-jest',
      },
    };
    break;

  default:
    module.exports = {};
}
