switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      coveragePathIgnorePatterns: ['/node_modules/', '/tools/'],
      globals: {
        'ts-jest': {
          tsConfigFile: './tools/tsconfig.test.json',
          stringifyContentPathRegex: '\\.html$',
          astTransformers: [
            'jest-preset-angular/build/InlineFilesTransformer',
            'jest-preset-angular/build/StripStylesTransformer',
          ],
        },
        __TRANSFORM_HTML__: true,
      },
      moduleFileExtensions: ['js', 'ts'],
      moduleNameMapper: {
        '~(.*)': '<rootDir>/src$1',
      },
      preset: 'jest-preset-angular',
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-app.ts',
      snapshotSerializers: [
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
      ],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      testPathIgnorePatterns: ['<rootDir>/node_modules/', '.*\\.e2e-spec.ts$'],
      transform: {
        '^.+\\.(ts|js|html)$': 'ts-jest',
        '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
          '<rootDir>/tools/assets-transform.js',
      },
    };
    break;

  case 'e2e':
    module.exports = {
      coveragePathIgnorePatterns: ['/node_modules/', '/tools/'],
      globals: {
        'ts-jest': {
          tsConfigFile: './tools/tsconfig.test.json',
        },
      },
      moduleFileExtensions: ['js', 'ts', 'json'],
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-e2e.ts',
      testPathIgnorePatterns: ['<rootDir>/node_modules/', '.*\\.spec.ts$'],
      testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
      transform: {
        '^.+\\.ts$': 'ts-jest',
      },
    };
    break;

  default:
    module.exports = {};
}
