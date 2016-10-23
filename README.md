# Angular Starter Kit

ToDo: Migrate to [Rollup](https://github.com/rollup/rollup) from Webpack.

## Project Status
[![Build Status](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit.svg?branch=master)](https://travis-ci.org/Shyam-Chen/Angular-Starter-Kit)
 //
[![Dependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit)
[![devDependency Status](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit/dev-status.svg)](https://david-dm.org/Shyam-Chen/Angular-Starter-Kit?type=dev)

## Key Features
* Angular, Material and Firebase
* Ubuntu, Atom, Git, Yarn and Docker
* Pug, Stylus, TypeScript, PugLint, Stylint and TSLint
* Gulp, Rollup, PostStylus, Types and BrowserSync
* Codelyzer, Jasmine, Karma, Protractor and Travis

## Getting Started

### Clone Angular-Starter-Kit
```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Angular-Starter-Kit.git
$ cd angular-starter-kit
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
$ docker build -t angular2ts-starter-kit .
$ docker run -it -p 3000:3000 --name app angular2ts-starter-kit
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
