# Angular Starter Kit (Beta)

> A boilerplate for Angular, Gulp, and Rollup. ([Live Demo](https://angular2ts-starter-kit.firebaseapp.com/))

[![Build Status](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit?type=dev)

This repository provides the following features:
* [x] Angular
* [ ] Material
* [ ] Firebase
* [x] Git
* [x] Yarn
* [x] Docker
* [x] Pug, Stylus, and TypeScript
* [x] PugLint, Stylint, and TSLint
* [ ] Gulp, Rollup
* [ ] PostStylus
* [x] Types
* [x] BrowserSync
* [x] Codelyzer
* [x] Jasmine and Karma
* [x] Protractor
* [x] Travis

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
