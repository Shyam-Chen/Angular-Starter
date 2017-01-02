# Angular Starter Kit (Alpha)

> A boilerplate written in Pug, Stylus, and TypeScript using Angular, ReactiveX, and NgRx.

[![Build Status](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit?type=dev)

[Live Demo](https://angular2ts-starter-kit.firebaseapp.com/)

This seed repository provides the following features:
* ---------- **Primary Key** ----------
* [ ] Template engine with **Pug**.
* [ ] CSS preprocessor with **Stylus**.
* [ ] JavaScript superset with **TypeScript**.
* [ ] Application framework with **Angular**.
* [ ] Reactive functions with **ReactiveX**.
* [ ] State container with **NgRx**.
* ---------- **Accent Key** ----------
* [ ] Utility functions with **Lodash**.
* [ ] User interface components with **Material**.
* [ ] Backend cloud services with **Firebase**.
* [ ] Data visualization with **Chart**.
* [ ] Cross platform mobile applications with **Cordova**.
* [ ] Cross platform desktop applications with **Electron**.
* ---------- **Dev Tools** ----------
* [ ] Build system with **Gulp**.
* [ ] Module bundler with **Rollup**.
* [ ] Stylus superpowers with **Rucksack**.
* [ ] TypeScript type definitions with **Types**.
* [ ] Development server with **BrowserSync**.
* ---------- **Test Tools** ----------
* [x] Pug static code analyzer with **PugLint**.
* [x] Stylus static code analyzer with **Stylint**.
* [x] TypeScript static code analyzer with **TSLint**.
* [x] Angular static code analysis with **Codelyzer**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* ---------- **Environment** ----------
* [x] Operating system with **Linux**.
* [x] Text editor with **Atom**.
* [x] Version control with **Git**.
* [x] Fast and deterministic builds with **Yarn**.
* [x] Software container with **Docker**.
* [x] Continuous integration with **Travis**.

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
