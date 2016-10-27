// import { join } from 'path';

class Config {
  APP_SRC = './src';
  APP_DEST = './public';

  TEMPLATES_SRC = `${this.APP_SRC}/**/*.pug`;
  STYLES_SRC = `${this.APP_SRC}/**/*.styl`;
  SCRIPTS_SRC = `${this.APP_SRC}/**/*.ts`;
}

const config: Config = new Config();

export = config;
