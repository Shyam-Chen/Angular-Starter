const { resolve, join } = require('path');
const gulp = require('gulp');
const express = require('express');
const fallback = require('express-history-api-fallback');
const { webdriver_update, protractor } = require('gulp-protractor');

const TEST_PORT = 8080;

const SOURCE_ROOT = join(__dirname, 'src');
const DIST_ROOT = join(__dirname, 'build');

class Protractor {
  server(port, dir) {
    const app = express();
    const root = resolve(process.cwd(), dir);

    app.use(express.static(root));
    app.use(fallback('index.html', { root }));

    return new Promise(resolve => {
      const server = app.listen(port, () => {
        resolve(server);
      });
    });
  }
}

gulp.task('webdriver', webdriver_update);

gulp.task('e2e', done => {
  new Protractor()
    .server(TEST_PORT, DIST_ROOT)
    .then(server => {
      gulp.src(join(SOURCE_ROOT, '**/*.e2e-spec.ts'))
        .pipe(protractor({ configFile: join(__dirname, 'protractor.conf.js') }))
        .on('error', error => { throw error; })
        .on('end', () => server.close(done));
    });
});

module.exports = {
  TEST_PORT,
  SOURCE_ROOT,
  DIST_ROOT,
  Protractor
};
