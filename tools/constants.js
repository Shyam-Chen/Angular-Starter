const { join } = require('path');

const DEV_PORT = 8000;
const TEST_PORT = 8080;

const SOURCE_ROOT = join(__dirname, '../src');
const DIST_ROOT = join(__dirname, '../build');

module.exports = {
  DEV_PORT,
  TEST_PORT,

  SOURCE_ROOT,
  DIST_ROOT
};
