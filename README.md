# AngularNest Fullstack Starter

:tiger: A boilerplate for Angular, Nest, Material, Express, TypeScript, and ReactiveX.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/AngularNest-Fullstack-Starter/master.svg)](https://circleci.com/gh/Shyam-Chen/AngularNest-Fullstack-Starter)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/AngularNest-Fullstack-Starter/master.svg)](https://codecov.io/gh/Shyam-Chen/AngularNest-Fullstack-Starter)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter/status.svg)](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter/dev-status.svg)](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter?type=dev)

:rainbow: Live Demo: Develop | [Master](https://angularnest-by-example.firebaseapp.com/)

## Table of Contents

* [Getting Started](#getting-started)
* [Key Features](#key-features)
* Project Template
* Dockerization
* Configuration
* [Directory Structure](#directory-structure)

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this Boilerplate

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
* [x] [Jest](https://github.com/facebook/jest)

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
├── tsconfig.api.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.test.json
├── tslint.json
├── webpack.config.js
└── yarn.lock
```
