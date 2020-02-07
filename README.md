# Angular Starter

:tiger: A boilerplate for Angular, Material, TypeScript, and ReactiveX.

|    | Project Information |
|:--:|---------------------|
| Live Demo | [![Develop Demo][demo-develop-image]][demo-develop-link] [![Master Demo][demo-master-image]][demo-master-link] |
| Develop Branch | [![Build Status][develop-build-image]][develop-build-link] [![Coverage Status][develop-coverage-image]][develop-coverage-link] |
| Master Branch | [![Build Status][master-build-image]][master-build-link] [![Coverage Status][master-coverage-image]][master-coverage-link] |
| Npm Package | [![dependencies Status][package-dependencies-image]][package-dependencies-link] [![devDependencies Status][package-devDependencies-image]][package-devDependencies-link] |

[demo-develop-image]: https://img.shields.io/badge/link-develop-blue.svg
[demo-develop-link]: https://angularnest-by-example-dev.firebaseapp.com/
[demo-master-image]: https://img.shields.io/badge/link-master-blue.svg
[demo-master-link]: https://angularnest-by-example-prod.firebaseapp.com/

[develop-build-image]: https://img.shields.io/circleci/project/github/Shyam-Chen/Angular-Starter/develop.svg
[develop-build-link]: https://circleci.com/gh/Shyam-Chen/workflows/Angular-Starter
[develop-coverage-image]: https://img.shields.io/codecov/c/github/Shyam-Chen/Angular-Starter/develop.svg
[develop-coverage-link]: https://codecov.io/gh/Shyam-Chen/Angular-Starter

[master-build-image]: https://img.shields.io/circleci/project/github/Shyam-Chen/Angular-Starter/master.svg
[master-build-link]: https://circleci.com/gh/Shyam-Chen/workflows/Angular-Starter
[master-coverage-image]: https://img.shields.io/codecov/c/github/Shyam-Chen/Angular-Starter/master.svg
[master-coverage-link]: https://codecov.io/gh/Shyam-Chen/Angular-Starter

[package-dependencies-image]: https://img.shields.io/david/Shyam-Chen/Angular-Starter.svg
[package-dependencies-link]: https://david-dm.org/Shyam-Chen/Angular-Starter
[package-devDependencies-image]: https://img.shields.io/david/dev/Shyam-Chen/Angular-Starter.svg
[package-devDependencies-link]: https://david-dm.org/Shyam-Chen/Angular-Starter?type=dev

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
$ git clone --depth 1 https://github.com/Shyam-Chen/Angular-Starter <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ yarn install
```

3. Start a local server

```bash
$ yarn start
```

4. Compile and bundle code

```bash
$ yarn build
```

5. Check code quality

```bash
$ yarn lint
```

6. Runs unit tests

```bash
$ yarn unit
```

7. Runs end-to-end tests

```bash
$ yarn e2e
```

## Key Features

This seed repository provides the following features:

* ---------- **Essentials** ----------
* [x] [Angular](https://github.com/angular/angular)
* [x] [Angular Material](https://github.com/angular/material2)
* [x] [ReactiveX](https://github.com/ReactiveX/rxjs)
* [x] [NGXS](https://github.com/ngxs/store)
* [ ] [Ngx Translate](https://github.com/ngx-translate/core)
* [ ] [Apollo GraphQL](https://github.com/apollographql)
* ---------- **Tools** ----------
* [x] [Webpack](https://github.com/webpack/webpack)
* [x] [TypeScript](https://github.com/Microsoft/TypeScript)
* [x] [PostCSS](https://github.com/postcss/postcss)
* [x] [TSLint](https://github.com/palantir/tslint)
* [x] [StyleLint](https://github.com/stylelint/stylelint)
* [x] [Jest](https://github.com/facebook/jest)
* [x] [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* ---------- **Environments** ----------
* [x] [Firebase](https://firebase.google.com/)
* [x] [CircleCI](https://circleci.com/)
* [x] [Codecov](https://codecov.io/)
* [x] [Docker](https://www.docker.com/)

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

Set an active project for working direct

```bash
$ yarn firebase use development
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
├── functions
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
├── src
│   ├── __tests__
│   │   └── ...
│   ├── _<THING>  -> app of private or protected things
│   │   └── ...
│   ├── assets  -> datas, fonts, images, medias, styles
│   │   └── ...
│   ├── core  -> core feature module
│   │   └── ...
│   ├── <FEATURE>  -> feature modules
│   │   ├── __tests__
│   │   │   ├── <FEATURE>.component.spec.js
│   │   │   └── <FEATURE>.e2e-spec.js
│   │   ├── _<THING>  -> feature of private or protected things
│   │   │   └── ...
│   │   ├── <FEATURE>.component.css
│   │   ├── <FEATURE>.component.html
│   │   ├── <FEATURE>.component.ts
│   │   └── <FEATURE>.module.ts
│   ├── <GROUP>  -> module group
│   │   └── <FEATURE>  -> feature modules
│   │       ├── __tests__
│   │       │   ├── <FEATURE>.component.spec.js
│   │       │   └── <FEATURE>.e2e-spec.js
│   │       ├── _<THING>  -> feature of private or protected things
│   │       │   └── ...
│   │       ├── <FEATURE>.component.css
│   │       ├── <FEATURE>.component.html
│   │       ├── <FEATURE>.component.ts
│   │       └── <FEATURE>.module.ts
│   ├── shared  -> shared feature module
│   │   └── ...
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── index.html
│   └── main.ts
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
├── jest.config.js
├── package.json
├── tsconfig.json
├── tslint.json
├── webpack.config.js
└── yarn.lock
```
