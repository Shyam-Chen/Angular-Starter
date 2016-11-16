# Angular Starter Kit (Alpha)

> A boilerplate for Angular, Gulp, and Rollup. ([Live Demo](https://angular2ts-starter-kit.firebaseapp.com/))

[![Build Status](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit?type=dev)

This seed repository provides the following features:
* [x] Start coding **Pug/Stylus/TypeScript** right now.
* [x] Web framework wtih **Angular**.
* [ ] UI components with **Material**.
* [ ] Back-end services with **Firebase**.
* [x] Functional reactive programming with **RxJS**.
* [ ] RxJS powered state management with **NgRx**.
* [x] Build system with **Gulp**.
* [ ] Module bundler with **Rollup**.
* [ ] Stylus super powers with **PostStylus**.
* [x] TypeScript type definitions with **Types**.
* [x] Development server with **BrowserSync**.
* [x] Static code analyzer with **PugLint**, **Stylint**, and **TSLint**.
* [x] Static code analysis of Angular TypeScript projects with **Codelyzer**.
* [x] Testing framework with **Jasmine**.
* [x] Unit tests with **Karma**.
* [x] End-to-end tests with **Protractor**.
* [x] Version control with **Git**.
* [x] Fast and determinsitic builds with **Yarn**.
* [x] Virtual machine with **Docker** and **Compose**.
* [x] Continuous integration and deployment with  **Travis**.

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
