const map: any = {
  'app': 'app',
  'rxjs': 'lib/rxjs',
  '@angular': 'lib/@angular',
  '@angular2-material': 'lib/@angular2-material'
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

const materialPkgs: string[] = [
  'core',
  'button'
];

materialPkgs.forEach((pkg: any) => {
  packages[`@angular2-material/${pkg}`] = {
    main: `${pkg}.js`
  };
});

const config: any = {
  map: map,
  packages: packages
};
