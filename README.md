# AngularNest Fullstack Starter

:tiger: A boilerplate for Angular, Nest, Material, Express, TypeScript, and ReactiveX.

[![Build Status](https://img.shields.io/circleci/project/github/Shyam-Chen/AngularNest-Fullstack-Starter/develop.svg)](https://circleci.com/gh/Shyam-Chen/AngularNest-Fullstack-Starter)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/AngularNest-Fullstack-Starter/develop.svg)](https://codecov.io/gh/Shyam-Chen/AngularNest-Fullstack-Starter)
 //
[![dependencies Status](https://img.shields.io/david/Shyam-Chen/AngularNest-Fullstack-Starter.svg)](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter)
[![devDependencies Status](https://img.shields.io/david/dev/Shyam-Chen/AngularNest-Fullstack-Starter.svg)](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter?type=dev)

:rainbow: Live Demo: [Develop](https://angularnest-by-example-dev.firebaseapp.com/) | [Master](https://angularnest-by-example-prod.firebaseapp.com/)

## Table of Contents

* [Getting Started](#getting-started)
* [Key Features](#key-features)
* [Dockerization](#dockerization)
* [Configuration](#configuration)
* [Directory Structure](#directory-structure)

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/AngularNest-Fullstack-Starter <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ yarn install
```

3. Set an active project for working direct

```bash
$ yarn firebase use development
```

4. Start a local server

```bash
# front-end
$ yarn start:app

# back-end
$ yarn start:api
```

5. Compile and bundle code

```bash
# front-end
$ yarn build:app

# back-end
$ yarn build:api
```

6. Check the code quality

```bash
# front-end
$ yarn lint:app

# back-end
$ yarn lint:api
```

7. Run the unit tests

```bash
# front-end
$ yarn test:app

# back-end
$ yarn test:api
```

8. Run the end-to-end tests

```bash
# front-end
$ yarn e2e:app

# back-end
$ yarn e2e:api
```

## Key Features

This seed repository provides the following features:

* ---------- **Core** ----------
* [x] [Web Fundamentals](https://developers.google.com/web/fundamentals/)
* [x] [Firebase Platform](https://firebase.google.com/)
* [x] [Google Cloud](https://cloud.google.com/)
* [x] [Docker](https://www.docker.com/)
* [x] [CircleCI](https://circleci.com/)
* [x] [Codecov](https://codecov.io/)
* ---------- **Front-end** ----------
* [x] [Angular](https://github.com/angular/angular)
* [x] [Angular Material](https://github.com/angular/material2)
* [ ] [NGXS](https://github.com/ngxs/store)
* [x] [Webpack](https://github.com/webpack/webpack)
* [x] [PostCSS](https://github.com/postcss/postcss)
* [x] [StyleLint](https://github.com/stylelint/stylelint)
* [x] [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* ---------- **Back-end** ----------
* [x] [Nest](https://github.com/nestjs/nest)
* [x] [Express](https://github.com/expressjs/express)
* [ ] [Request](https://github.com/request/request)
* [x] [Gulp](https://github.com/gulpjs/gulp)
* [x] [SuperTest](https://github.com/visionmedia/supertest)
* ---------- **Shared** ----------
* [ ] [Apollo GraphQL](https://github.com/apollographql)
* [x] [ReactiveX](https://github.com/ReactiveX/rxjs)
* [ ] [TensorFlow](https://github.com/tensorflow/tfjs)
* [x] [TypeScript](https://github.com/Microsoft/TypeScript)
* [x] [TSLint](https://github.com/palantir/tslint)
* [x] [Jest](https://github.com/facebook/jest)

## Dockerization

Dockerize an application.

1. Build and run the container in the background

```bash
$ docker-compose up -d <SERVICE>
```

2. Run a command in a running container

```bash
$ docker-compose exec <SERVICE> <COMMAND>
```

3. Remove the old container before creating the new one

```bash
$ docker-compose rm -fs
```

4. Restart up the container in the background

```bash
$ docker-compose up -d --build <SERVICE>
```

5. Push images to Docker Cloud

```diff
# .gitignore

  .DS_Store
  node_modules
  npm
  public
  functions
  coverage
+ dev.Dockerfile
+ stage.Dockerfile
+ prod.Dockerfile
  *.log
```

```bash
$ docker login
$ docker build -f tools/<dev|stage|prod>.Dockerfile -t <IMAGE_NAME>:<IMAGE_TAG> .

# checkout
$ docker images

$ docker tag <IMAGE_NAME>:<IMAGE_TAG> <DOCKER_ID_USER>/<IMAGE_NAME>:<IMAGE_TAG>
$ docker push <DOCKER_ID_USER>/<IMAGE_NAME>:<IMAGE_TAG>

# remove
$ docker rmi <REPOSITORY>:<TAG>
# or
$ docker rmi <IMAGE_ID>
```

6. Pull images from Docker Cloud

```diff
# docker-compose.yml

  <dev|stage|prod>:
-   image: <dev|stage|prod>
-   build:
-     context: .
-     dockerfile: tools/<dev|stage|prod>.Dockerfile
+   image: <DOCKER_ID_USER>/<IMAGE_NAME>:<IMAGE_TAG>
    volumes:
      - yarn:/home/node/.cache/yarn
    tty: true
```

## Configuration

### Project environments

Change to your project.

```js
// .firebaserc
{
  "projects": {
    "development": "<DEV_PROJECT_NAME>",
    "staging": "<STAGE_PROJECT_NAME>",
    "production": "<PROD_PROJECT_NAME>"
  }
}
```

### Default environments

Set your local environment variables. (use `this.<ENV_NAME> = process.env.<ENV_NAME> || <LOCAL_ENV>;`)

```js
// env.js
function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.PROJECT_NAME = process.env.PROJECT_NAME || '<PROJECT_NAME>';

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
```

### Deployment environment

Set your deployment environment variables.

```dockerfile
# tools/<dev|stage|prod>.Dockerfile

# envs --
ENV SITE_URL <SITE_URL>
ENV FUNC_URL <FUNC_URL>
# -- envs
```

### CI environment

Add environment variables to the CircleCI build.

```yml
CODECOV_TOKEN
DOCKER_PASSWORD
DOCKER_USERNAME
FIREBASE_TOKEN
```

### SEO friendly

Enable billing on your Firebase Platform and Google Cloud the project by switching to the Blaze plan.

Serve dynamic content for bots.

```diff
// firebase.json
    "rewrites": [
      {
        "source": "**",
-       "destination": "/index.html"
+       "function": "app"
      }
    ],
```

Deploy rendertron instance to Google App Engine.

```bash
$ git clone https://github.com/GoogleChrome/rendertron
$ cd rendertron
$ gcloud auth login
$ gcloud app deploy app.yaml --project <RENDERTRON_NAME>
```

Set your rendertron instance in deployment environment.

```dockerfile
# tools/<dev|stage|prod>.Dockerfile

# envs --
ENV RENDERTRON_URL <RENDERTRON_URL>
# -- envs
```

## Directory Structure

The structure follows the LIFT Guidelines.

```coffee
.
├── src
│   ├── api
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> api of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   ├── <FEATURE>.controller.spec.ts
│   │   │   │   └── <FEATURE>.e2e-spec.ts
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   ├── <FEATURE>.controller.ts
│   │   │   ├── <FEATURE>.module.ts
│   │   │   └── <FEATURE>.service.ts
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   ├── <FEATURE>.controller.spec.ts
│   │   │       │   └── <FEATURE>.e2e-spec.ts
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       ├── <FEATURE>.controller.ts
│   │   │       ├── <FEATURE>.module.ts
│   │   │       └── <FEATURE>.service.ts
│   │   ├── graphql
│   │   │   ├── <FEATURE>  -> feature modules
│   │   │   │   ├── __tests__
│   │   │   │   │   └── ...
│   │   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   └── <GROUP>  -> module group
│   │   │       └── <FEATURE>  -> feature modules
│   │   │           ├── __tests__
│   │   │           │   └── ...
│   │   │           ├── _<THING>  -> feature of private things
│   │   │           │   └── ...
│   │   │           └── ...
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   ├── api.controller.ts
│   │   ├── api.module.ts
│   │   └── api.service.ts
│   ├── app
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> app of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   ├── <FEATURE>.component.spec.js
│   │   │   │   └── <FEATURE>.e2e-spec.js
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   ├── <FEATURE>.component.css
│   │   │   ├── <FEATURE>.component.html
│   │   │   ├── <FEATURE>.component.ts
│   │   │   └── <FEATURE>.module.ts
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   ├── <FEATURE>.component.spec.js
│   │   │       │   └── <FEATURE>.e2e-spec.js
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       ├── <FEATURE>.component.css
│   │   │       ├── <FEATURE>.component.html
│   │   │       ├── <FEATURE>.component.ts
│   │   │       └── <FEATURE>.module.ts
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets  -> datas, fonts, images, medias, styles
│   │   └── ...
│   ├── client.ts
│   ├── index.html
│   └── server.ts
├── tools
│   └── ...
├── .editorconfig
├── .firebaserc
├── .gitignore
├── .postcssrc
├── .stylelintrc
├── Dockerfile
├── LICENSE
├── README.md
├── circle.yml
├── docker-compose.yml
├── env.js
├── firebase.json
├── gulpfile.js
├── jest.config.js
├── package.json
├── tsconfig.json
├── tslint.json
├── webpack.config.js
└── yarn.lock
```
