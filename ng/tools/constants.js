const { join } = require('path');

const SITE_URL = 'https://web-go-demo.firebaseapp.com/';
const APP_BASE = '/';

const DEV_PORT = 8000;
const TEST_PORT = 4200;

const SOURCE_ROOT = join(__dirname, '../src');
const DIST_ROOT = join(__dirname, '../dist');

const ASSETS_ROOT = join(SOURCE_ROOT, 'assets');

module.exports = {
  SITE_URL,
  APP_BASE,

  DEV_PORT,
  TEST_PORT,

  SOURCE_ROOT,
  DIST_ROOT,
  ASSETS_ROOT,
};
