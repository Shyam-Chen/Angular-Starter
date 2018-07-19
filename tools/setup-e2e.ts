declare var global: any;

import * as test from 'firebase-functions-test';

import { SITE_URL, FUNC_URL } from '../env';

test({
  databaseURL: 'https://my-project.firebaseio.com',
  storageBucket: 'my-project.appspot.com',
  projectId: 'my-project',
});

global.SITE_URL = SITE_URL;
global.FUNC_URL = FUNC_URL;

const [width, height] = [1280, 800];

global.viewport = { width, height };

global.launch = {
  headless: false,
  slowMo: 80,
  args: [`--window-size=${width},${height}`, '--no-sandbox'],
};
