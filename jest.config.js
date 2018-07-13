switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/tools/',
      ],
      globals: {
        'ts-jest': {
          tsConfigFile: 'tsconfig.app.json',
        },
        __TRANSFORM_HTML__: true,
      },
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-app.ts',
      transform: {
        '^.+\\.(ts)$': '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
      },
    };
    break;

  case 'api':
    module.exports = {
      globals: {
        'ts-jest': {
          tsConfigFile: 'tsconfig.api.json',
        },
      },
      transform: {
        '^.+\\.ts$': 'ts-jest',
      },
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
