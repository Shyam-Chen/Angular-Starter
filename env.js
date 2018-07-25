function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.PROJECT_NAME = process.env.PROJECT_NAME || 'angularnest-by-example-dev';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';

  this.SITE_PORT = process.env.SITE_PORT || 8000;
  this.SITE_URL = process.env.SITE_URL || `http://${this.HOST_NAME}:${this.SITE_PORT}`;

  this.FUNC_PORT = process.env.FUNC_PORT || 5000;
  this.FUNC_URL = process.env.FUNC_URL || `http://${this.HOST_NAME}:${this.FUNC_PORT}/${this.PROJECT_NAME}/us-central1`;

  this.APP_BASE = process.env.APP_BASE || '/';

  this.FIREBASE_CONFIG = process.env.FIREBASE_CONFIG || {
    apiKey: process.env.FIREBASE_API_KEY || '<API_KEY>',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || '<FIREBASE_AUTH_DOMAIN>',
    databaseURL: process.env.FIREBASE_DATABASE_URL || '<FIREBASE_DATABASE_URL>',
    projectId: process.env.FIREBASE_PROJECT_ID || '<FIREBASE_PROJECT_ID>',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '<FIREBASE_STORAGE_BUCKET>',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '<FIREBASE_MESSAGING_SENDER_ID>',
  };

  this.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || '<GOOGLE_ANALYTICS>';

  this.SENTRY_DSN = process.env.SENTRY_DSN || null;
  this.RENDERTRON_URL = process.env.RENDERTRON_URL || null;
}

module.exports = new Environments();
