# Angular Starter Kit (Alpha)

> A boilerplate written in Pug, Stylus, and TypeScript using Angular, Lodash, RxJS, and NgRx.

[![Build Status](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit?type=dev)

[Live Demo](https://angular2ts-starter-kit.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [ ] Template engine with [**Pug**](https://pugjs.org).
* [ ] CSS preprocessor with [**Stylus**](http://stylus-lang.com/).
* [ ] JavaScript superset with [**TypeScript**](https://www.typescriptlang.org/).
* [ ] Application framework with [**Angular**](https://angular.io/).
* [ ] Utility functions with [**Lodash**](https://lodash.com/).
* [ ] Reactive functions with [**RxJS**](http://reactivex.io/rxjs/).
* [ ] State container with [**NgRx**](https://github.com/ngrx).
* ---------- **Dev Tools** ----------
* [ ] Build system with [**Gulp**](https://github.com/gulpjs/gulp).
* [ ] Module bundler with [**Rollup**](https://github.com/rollup/rollup).
* [ ] Stylus superpowers with [**Rucksack**](https://github.com/simplaio/rucksack).
* [ ] TypeScript type definitions with [**Types**](https://github.com/types).
* [ ] Development server with [**BrowserSync**](https://github.com/BrowserSync/browser-sync).
* ---------- **Test Tools** ----------
* [x] Pug static code analyzer with [**PugLint**](https://github.com/pugjs/pug-lint).
* [x] Stylus static code analyzer with [**Stylint**](https://github.com/SimenB/stylint).
* [x] TypeScript static code analyzer with [**TSLint**](https://github.com/palantir/tslint).
* [x] Angular static code analysis with [**Codelyzer**](https://github.com/mgechev/codelyzer).
* [x] Testing framework with [**Jasmine**](https://github.com/jasmine/jasmine).
* [x] Unit tests with [**Karma**](https://github.com/karma-runner/karma).
* [x] End-to-end tests with [**Protractor**](https://github.com/angular/protractor).
* ---------- **Environment** ----------
* [x] Operating system with [**Linux**](https://github.com/torvalds/linux).
* [x] Text editor with [**Atom**](https://github.com/atom/atom).
* [x] Version control with [**Git**](https://github.com/git/git).
* [x] Fast and deterministic builds with [**Yarn**](https://github.com/yarnpkg/yarn).
* [x] Software container with [**Docker**](https://github.com/docker/docker).
* [x] Continuous integration with [**Travis CI**](https://github.com/travis-ci/travis-ci).

## Getting Started

### Clone Angular-Starter-Kit
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Angular-Starter-Kit.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

### Install Dependencies
```bash
$ yarn install
```

### Run the Application
```bash
$ yarn start
```

## Using Docker

### Run the Application
```bash
$ docker build -t angular-starter-kit .
$ docker run -it -p 3000:3000 --name app angular-starter-kit
```

### Run the Application with Compose
```bash
$ docker-compose up
```

## Other Commands

### Build the Application
```bash
$ yarn run build
```

### Test the Application
```bash
$ yarn run lint
$ yarn run unit
$ yarn run e2e
```

### Clean the Application
```bash
$ yarn run clean
```

### Reset the Application
```bash
$ yarn run reset
```

### Reinstall the Application
```bash
$ yarn run reinstall
```
