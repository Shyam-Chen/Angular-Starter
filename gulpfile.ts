import {
  TEMPLATES_SRC, STYLES_SRC, SCRIPTS_SRC, IMAGES_SRC, FONTS_SRC,
  APP_DEST, IMAGES_DEST, FONTS_DEST, LIBS_DEST
} from './tools/config/config';
import { E2EServer } from './tools/utils/e2eserver';

import * as gulp from 'gulp';
import * as changed from 'gulp-changed';
import * as pug from 'gulp-pug';
import * as pugLint from 'gulp-pug-linter';
import * as stylus from 'gulp-stylus';
import * as stylint from 'gulp-stylint';
import * as poststylus from 'poststylus';
import * as typescript from 'gulp-typescript';
import * as tslint from 'gulp-tslint';
import * as browserSync from 'browser-sync';
import * as connectHistory from 'connect-history-api-fallback';
import * as runSequence from 'run-sequence';
import { protractor, webdriver_update } from 'gulp-protractor';

gulp.task('copy-libs', () =>
  gulp
    .src([
      'core-js/client/shim.min.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/zone.js',
      '@angular/**',
      'rxjs/**'
    ], {
      cwd: 'node_modules/**'
    })
    .pipe(gulp.dest(LIBS_DEST))
);

gulp.task('copy-config', () =>
  gulp
    .src('./system.config.js')
    .pipe(gulp.dest(APP_DEST))
);

gulp.task('compile-pug', () =>
  gulp
    .src(TEMPLATES_SRC)
    .pipe(changed(APP_DEST))
    .pipe(pug())
    .pipe(gulp.dest(APP_DEST))
    .pipe(browserSync.stream())
);

gulp.task('compile-stylus', () => {
  let customOpts = { use: [poststylus(['rucksack-css'])] };

  gulp
    .src(STYLES_SRC)
    .pipe(changed(APP_DEST))
    .pipe(stylus(customOpts))
    .pipe(gulp.dest(APP_DEST))
    .pipe(browserSync.stream());
});

gulp.task('compile-typescript', () => {
  let customOpts = { module: 'system', moduleResolution: 'node' };
  let tsProject = typescript.createProject('tsconfig.json', customOpts);

  gulp
    .src(SCRIPTS_SRC)
    .pipe(changed(APP_DEST))
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(APP_DEST))
    .pipe(browserSync.stream());
});

gulp.task('copy-images', () =>
  gulp
    .src(IMAGES_SRC)
    .pipe(gulp.dest(IMAGES_DEST))
);

gulp.task('copy-fonts', () =>
  gulp
    .src(FONTS_SRC)
    .pipe(gulp.dest(FONTS_DEST))
);

gulp.task('build', (done: any) =>
  runSequence(
    'copy-libs', 'copy-config',
    'compile-pug', 'compile-stylus', 'compile-typescript',
    'copy-images', 'copy-fonts',
    done
  )
);

gulp.task('serve', () =>
  browserSync({
    server: {
      baseDir: APP_DEST,
      middleware: [connectHistory()]
    }
  })
);

gulp.task('watch', () => {
  gulp.watch(TEMPLATES_SRC, ['compile-pug']);
  gulp.watch(STYLES_SRC, ['compile-stylus']);
  gulp.watch(SCRIPTS_SRC, ['compile-typescript']);
});

gulp.task('start', (done: any) =>
  runSequence('build', 'serve', 'watch', done)
);

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

gulp.task('webdriver', webdriver_update);

gulp.task('e2e', (done: any) => {
  new E2EServer()
    .server(9876, APP_DEST)
    .then((server: any) => {
      gulp
        .src('./src/**/*.e2e-spec.ts')
        .pipe(protractor({ configFile: 'protractor.conf.coffee' }))
        .on('error', (error: string) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});

gulp.task('test', (done: any) =>
  runSequence('build', 'lint', 'e2e', done)
);
