class Config {

  APP_SRC = './src';
  TEMPLATES_SRC = `${this.APP_SRC}/**/*.pug`;
  STYLES_SRC = `${this.APP_SRC}/**/*.styl`;
  SCRIPTS_SRC = [
    'typings/browser.d.ts',
    `${this.APP_SRC}/**/*.ts`
  ];
  IMAGES_SRC = `${this.APP_SRC}/assets/images/**/*`;
  FONTS_SRC = `${this.APP_SRC}/assets/fonts/**/*`;
  LIBS_SRC = [
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/systemjs/dist/system.src.js',
    'node_modules/rxjs/bundles/Rx.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/router.dev.js',
    'node_modules/angular2/bundles/http.dev.js'
  ];
  WATCH_SRC = `${this.APP_SRC}/**/*`;

  APP_DEST = './public';
  IMAGES_DEST = `${this.APP_DEST}/assets/images`;
  FONTS_DEST = `${this.APP_DEST}/assets/fonts`;
  LIBS_DEST = `${this.APP_DEST}/libs`;

}

const config: Config = new Config();

export = config;
