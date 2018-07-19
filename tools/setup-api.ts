import * as test from 'firebase-functions-test';

test({
  databaseURL: 'https://my-project.firebaseio.com',
  storageBucket: 'my-project.appspot.com',
  projectId: 'my-project',
});
