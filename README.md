# Angular Starter Kit (Alpha)

> A boilerplate written in Pug, Stylus, and TypeScript using Angular, Material, Firebase, Gulp, and Rollup.

[![Build Status](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit?type=dev)

[Live Demo](https://angular2ts-starter-kit.firebaseapp.com/)

This seed repository provides the following features:
* [x] Start coding **Pug/Stylus/TypeScript** right now.
* [x] App framework wtih **Angular**.
* [ ] UI components with **Material**.
* [ ] Back-end services with **Firebase**.
* [x] Functional reactive programming with **RxJS**.
* [x] Build system with **Gulp**.
* [ ] Module bundler with **Rollup**.
* [x] Stylus superpowers with **PostStylus**.
* [x] TypeScript type definitions with **Types**.
* [x] Development server with **BrowserSync**.
* [x] Pug static code analyzer with **PugLint**.
* [x] Stylus static code analyzer with **Stylint**.
* [x] TypeScript static code analyzer with **TSLint**.
* [x] Angular static code analysis with **Codelyzer**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* [x] Version control with **Git**.
* [x] Fast and deterministic builds with **Yarn**.
* [x] Virtual machine with **Docker**.
* [x] Continuous integration and delivery with **Travis**.

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
