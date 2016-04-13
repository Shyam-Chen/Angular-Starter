import { TEMPLATES_SRC, STYLES_SRC, SCRIPTS_SRC, IMAGES_SRC, LIBS_SRC  } from './tools/config';
import { APP_DEST, IMAGES_DEST, LIBS_DEST } from './tools/config';
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
  gulp
    .src(STYLES_SRC)
    .pipe(changed(APP_DEST))
    .pipe(stylus({
      use: [
        poststylus([
          'rucksack-css'
        ])
      ]
    }))
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
