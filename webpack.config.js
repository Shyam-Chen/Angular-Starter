/**
 * @author: @AngularClass
 */

/**
 * Look in ./config folder for webpack.dev.js
 */
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./tools/webpack.prod')({env: 'production'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./tools/webpack.dev')({env: 'development'});
}
