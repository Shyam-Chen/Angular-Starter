import {
  TEMPLATES_SRC, STYLES_SRC, SCRIPTS_SRC, IMAGES_SRC, FONTS_SRC,
  APP_DEST, IMAGES_DEST, FONTS_DEST, LIBS_DEST
} from './tools/config/config';

import * as gulp from 'gulp';
import * as changed from 'gulp-changed';
import * as cache from 'gulp-cached';
import * as remember from 'gulp-remember';
import * as pug from 'gulp-pug';
import * as pugLint from 'gulp-pug-linter';
import * as stylus from 'gulp-stylus';
import * as stylint from 'gulp-stylint';
import * as poststylus from 'poststylus';
import * as typescript from 'gulp-typescript';
import * as tslint from 'gulp-tslint';
import * as browserSync from 'browser-sync';
import * as runSequence from 'run-sequence';

import * as express from 'express';
import * as history from 'express-history-api-fallback';
import { resolve } from 'path';
import { protractor, webdriver_update } from 'gulp-protractor';

gulp.task('compile-pug', () => {
  gulp
    .src(TEMPLATES_SRC)
    .pipe(changed(APP_DEST))
    .pipe(pug())
    .pipe(gulp.dest(APP_DEST))
    .pipe(browserSync.stream());
});

gulp.task('lint-pug', () => {
  gulp
    .src(TEMPLATES_SRC)
    .pipe(pugLint({ config: '.pug-lintrc' }))
    .pipe(pugLint.reporter());
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

gulp.task('lint-stylus', () =>
  gulp
    .src(STYLES_SRC)
    .pipe(stylint({ config: '.stylintrc' }))
    .pipe(stylint.reporter())
);

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

gulp.task('lint-typescript', () =>
  gulp
    .src(SCRIPTS_SRC)
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
);

gulp.task('copy-images', () => {
  gulp
    .src(IMAGES_SRC)
    .pipe(gulp.dest(IMAGES_DEST));
});

gulp.task('copy-fonts', () =>
  gulp
    .src(FONTS_SRC)
    .pipe(gulp.dest(FONTS_DEST))
);

gulp.task('copy-libs', () => {
  gulp
    .src([
      'core-js/client/shim.min.js',
      'systemjs/dist/system.src.js',
      'reflect-metadata/Reflect.js',
      'zone.js/dist/zone.js',
      '@angular/**',
      'rxjs/**'
    ], {
      cwd: 'node_modules/**'
    })
    .pipe(gulp.dest(LIBS_DEST));
});

gulp.task('copy-config', () =>
  gulp
    .src('./system.config.js')
    .pipe(gulp.dest(APP_DEST))
);

gulp.task('build', (done: any) =>
  runSequence(
    'copy-libs', 'copy-config',
    'compile-pug', 'compile-stylus', 'compile-typescript',
    'copy-images', 'copy-fonts',
    done
  )
);

gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: APP_DEST
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(TEMPLATES_SRC, ['compile-pug']);
  gulp.watch(STYLES_SRC, ['compile-stylus']);
  gulp.watch(SCRIPTS_SRC, ['compile-typescript']);
});

gulp.task('default', (done: any) =>
  runSequence('build', 'serve', 'watch', done)
);

gulp.task('lint', (done: any) =>
  runSequence('lint-pug', 'lint-stylus', 'lint-typescript', done)
);

class Protractor {
  server(port: number, dir: string) {
    let app = express();
    let root = resolve(process.cwd(), dir);
    app.use(express.static(root));
    app.use(history('index.html', { root }));
    return new Promise((resolve, reject) => {
      let server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}

gulp.task('webdriver', webdriver_update);

gulp.task('e2e', (done: any) => {
  new Protractor()
    .server(9876, './public')
    .then((server: any) => {
      gulp
        .src('./src/**/*.e2e-spec.js')
        .pipe(protractor({ configFile: 'protractor.conf.coffee' }))
        .on('error', (error: string) => { throw error; })
        .on('end', () => { server.close(done); });
    });
});
