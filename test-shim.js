Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = () => {
  // ...
};

const isJsFile = path => {
  return path.slice(-3) === '.js';
};

const isSpecFile = path => {
  return path.slice(-8) === '.spec.js';
};

const isBuiltFile = path => {
  let builtPath = 'test';
  return isJsFile(path) && (path.substr(0, builtPath.length) === builtPath);
}

const allSpecFiles = Object
  .keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isBuiltFile);

System.config({
  baseURL: './'
});

System.config({
  map: {
    'app': 'test',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
  },
  packages: {
    'app': {
      main: 'main.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/core': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/http': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'index.js',
      defaultExtension: 'js'
    },
    'rxjs': {
      defaultExtension: 'js'
    }
  }
});

Promise
  .all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
  ])
  .then(providers => {
    let testing = providers[0];
    let testingBrowser = providers[1];

    testing.TestBed.initTestEnvironment(
      testingBrowser.BrowserDynamicTestingModule,
      testingBrowser.platformBrowserDynamicTesting()
    );
  })
  .then(() => {
    return Promise
      .all(
        allSpecFiles.map(moduleName => {
          return System.import(moduleName);
        })
      );
  })
  .then(__karma__.start, __karma__.error);
