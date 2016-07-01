(function(global) {

  var map = {
    'app': 'app',
    '@angular': 'lib/@angular',
    'rxjs': 'lib/rxjs'
  };

  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var packageNames = [
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms",
    "@angular/http",
    "@angular/platform-browser",
    '@angular/platform-browser-dynamic',
    "@angular/router"
  ];

  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = { map: map, packages: packages };

  if (global.filterSystemConfig) {
    global.filterSystemConfig(config);
  }

  System.config(config);

})(this);
