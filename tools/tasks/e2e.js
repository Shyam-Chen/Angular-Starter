const { join } = require('path');
const gulp = require('gulp');
const { webdriver_update, protractor } = require('gulp-protractor');

const { TEST_PORT, SOURCE_ROOT, DIST_ROOT } = require('../constants');
const { Protractor } = require('../utils/e2e-server');

gulp.task('webdriver', webdriver_update);

gulp.task('e2e', done => {
  new Protractor()
    .server(TEST_PORT, DIST_ROOT)
    .then(server => {
      gulp.src(join(SOURCE_ROOT, '**/*.e2e-spec.js'))
        .pipe(protractor({ configFile: join(__dirname, '../../protractor.conf.js') }))
        .on('error', error => { throw error; })
        .on('end', () => server.close(done));
    });
});
