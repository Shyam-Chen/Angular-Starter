const map: any = {
  'app': 'app',
  '@angular': 'lib/@angular',
  'rxjs': 'lib/rxjs'
};

const packages: any = {
  'app': {
    main: 'main.js',
    defaultExtension: 'js'
  },
  'rxjs': {
    defaultExtension: 'js'
  }
};

const packageNames: string[] = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router'
];

packageNames.forEach((pkgName: any) => {
  packages[pkgName] = {
    main: 'index.js',
    defaultExtension: 'js'
  };
});

const config: any = {
  map: map,
  packages: packages
};
