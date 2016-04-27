import { TEMPLATES_SRC, STYLES_SRC, SCRIPTS_SRC, IMAGES_SRC, FONTS_SRC, LIBS_SRC  } from './config';
import { APP_DEST, IMAGES_DEST, FONTS_DEST, LIBS_DEST } from './config';
import * as gulp from 'gulp';
import * as changed from 'gulp-changed';
import * as jade from 'gulp-jade';
import * as stylus from 'gulp-stylus';
import * as poststylus from 'poststylus';
import * as typescript from 'gulp-typescript';
import * as browserSync from 'browser-sync';
import * as runSequence from 'run-sequence';

gulp.task('compile-jade', () => {
  gulp
    .src(TEMPLATES_SRC)
    .pipe(changed(APP_DEST))
    .pipe(jade())
    .pipe(gulp.dest(APP_DEST))
    .pipe(browserSync.stream());
});

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

gulp.task('copy-images', () => {
  gulp
    .src(IMAGES_SRC)
    .pipe(gulp.dest(IMAGES_DEST));
});

gulp.task('copy-fonts', () => {
  gulp
    .src(FONTS_SRC)
    .pipe(gulp.dest(FONTS_DEST));
});

gulp.task('copy-libs', () => {
  gulp
    .src(LIBS_SRC)
    .pipe(gulp.dest(LIBS_DEST));
});

gulp.task('build', () => {
  runSequence(
    'compile-jade',
    'compile-stylus',
    'compile-typescript',
    'copy-images',
    'copy-fonts',
    'copy-libs'
  );
});

gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: APP_DEST
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(TEMPLATES_SRC, ['compile-jade']);
  gulp.watch(STYLES_SRC, ['compile-stylus']);
  gulp.watch(SCRIPTS_SRC, ['compile-typescript']);
});

gulp.task('default', () => {
  runSequence('build', 'serve', 'watch');
});

// try it
import * as express from 'express';
import { protractor, webdriver_update } from 'gulp-protractor';

const e2eServer = function(port: number, dir: string): any {
  let app = express();
  app.use(express.static(dir));

  return new Promise((resolve, reject) => {
    let server = app.listen(port, () => {
      resolve(server);
    });
  });
};

gulp.task('postinstall', webdriver_update);

gulp.task('e2e', (done: any) => {
  e2eServer(9876, './public')
    .then((server: any) => {
      gulp
        .src('./src/**/*.e2e.js')
        .pipe(protractor({ configFile: 'protractor.conf.coffee' }))
        .on('error', (error: string) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});
