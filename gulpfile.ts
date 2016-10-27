import * as gulp from 'gulp';
const pugLint = require('gulp-pug-linter');  // import * as pugLint from 'gulp-pug-linter';
const stylint = require('gulp-stylint');  // import * as stylint from 'gulp-stylint';
const tslint = require('gulp-tslint');  // import * as tslint from 'gulp-tslint';
import * as runSequence from 'run-sequence';
const gProtractor = require('gulp-protractor');  // import { protractor, webdriver_update } from 'gulp-protractor';

import { TEMPLATES_SRC, STYLES_SRC, SCRIPTS_SRC, APP_DEST } from './tools/config/gulp.config';
import { E2EServer } from './tools/utils/e2eserver';

const pug = require('gulp-pug');

gulp.task('cpi', () => {
  gulp.src('./src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest(APP_DEST));
});

const rollup = require('rollup-stream');
const typescript = require('rollup-plugin-typescript');
const stylus = require('rollup-plugin-stylus');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

gulp.task('ctp', () => {
  rollup({
    entry: './src/polyfills.ts',
    format: 'iife',
    plugins: [
      typescript(),
      resolve({ jsnext: true, browser: true }),
      commonjs(),
      uglify()
    ]
  })
  .pipe(source('polyfills.js', APP_DEST))
  .pipe(buffer())
  .pipe(gulp.dest(APP_DEST));
});

gulp.task('ctv', () => {
  rollup({
    entry: './src/vendor.ts',
    format: 'iife',
    plugins: [
      typescript(),
      stylus(),
      resolve({ jsnext: true, browser: true }),
      commonjs(),
      uglify()
    ]
  })
  .pipe(source('vendor.js', APP_DEST))
  .pipe(buffer())
  .pipe(gulp.dest(APP_DEST));
});

gulp.task('ctm', () => {
  rollup({
    entry: './src/main.ts',
    format: 'iife',
    plugins: [
      typescript(),
      stylus({ output: './public/main.css' }),
      resolve({ jsnext: true, browser: true }),
      commonjs(),
      uglify()
    ]
  })
  .pipe(source('main.js', APP_DEST))
  .pipe(buffer())
  .pipe(gulp.dest(APP_DEST));
});



gulp.task('lint-pug', () =>
  gulp
    .src(TEMPLATES_SRC)
    .pipe(pugLint({ config: '.pug-lintrc' }))
    .pipe(pugLint.reporter())
);

gulp.task('lint-stylus', () =>
  gulp
    .src(STYLES_SRC)
    .pipe(stylint({ config: '.stylintrc' }))
    .pipe(stylint.reporter())
);

gulp.task('lint-typescript', () =>
  gulp
    .src(SCRIPTS_SRC)
    .pipe(tslint({ configuration: 'tslint.json' }))
    .pipe(tslint.report())
);

gulp.task('lint', (done: any) =>
  runSequence('lint-pug', 'lint-stylus', 'lint-typescript', done)
);

gulp.task('webdriver', gProtractor.webdriver_update);

gulp.task('e2e', (done: any) => {
  new E2EServer()
    .server(9876, APP_DEST)
    .then((server: any) => {
      gulp
        .src('./src/**/*.e2e-spec.ts')
        .pipe(gProtractor.protractor({ configFile: 'protractor.conf.js' }))
        .on('error', (error: string) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});
