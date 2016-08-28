import {
  TEMPLATES_SRC, STYLES_SRC, SCRIPTS_SRC, IMAGES_SRC, FONTS_SRC,
  APP_DEST, IMAGES_DEST, FONTS_DEST, LIBS_DEST
} from './tools/config/gulp.config';
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

gulp.task('serve', () =>
  browserSync({
    server: {
      baseDir: APP_DEST,
      middleware: [connectHistory()]
    }
  })
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
    .server(9876, 'public')
    .then((server: any) => {
      gulp
        .src('./src/**/*.e2e-spec.ts')
        .pipe(protractor({ configFile: 'protractor.conf.coffee' }))
        .on('error', (error: string) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});
