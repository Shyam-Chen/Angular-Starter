const { join } = require('path');
const gulp = require('gulp');
const { env } = require('gulp-util');
const { Server } = require('karma');

gulp.task('unit', done => {
  new Server(
    {
      configFile: join(__dirname, '../config/karma.js'),
      singleRun: true
    },
    done
  )
  .start();
});
