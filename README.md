# AngularNest Fullstack Starter

:tiger: A boilerplate for Angular, Nest, Material, Express, TypeScript, and ReactiveX.

[![Build Status](https://img.shields.io/circleci/project/Shyam-Chen/AngularNest-Fullstack-Starter/master.svg)](https://circleci.com/gh/Shyam-Chen/AngularNest-Fullstack-Starter)
[![Coverage Status](https://img.shields.io/codecov/c/github/Shyam-Chen/AngularNest-Fullstack-Starter/master.svg)](https://codecov.io/gh/Shyam-Chen/AngularNest-Fullstack-Starter)
 //
[![dependencies Status](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter/status.svg)](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter)
[![devDependencies Status](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter/dev-status.svg)](https://david-dm.org/Shyam-Chen/AngularNest-Fullstack-Starter?type=dev)

[Live Demo](https://angularnest-by-example.firebaseapp.com/)

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
│   │   │   │   └── ...
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   └── ...
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       └── ...
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
│   │   └── index.js
│   ├── app
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> app of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   ├── actions.spec.js
│   │   │   │   ├── <FEATURE>.e2e-spec.js
│   │   │   │   ├── <FEATURE>.spec.js
│   │   │   │   ├── getters.spec.js
│   │   │   │   └── mutations.spec.js
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── <FEATURE>.vue
│   │   │   ├── getters.js
│   │   │   ├── mutations.js
│   │   │   └── types.js
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   ├── actions.spec.js
│   │   │       │   ├── <FEATURE>.e2e-spec.js
│   │   │       │   ├── <FEATURE>.spec.js
│   │   │       │   ├── getters.spec.js
│   │   │       │   └── mutations.spec.js
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       ├── actions.js
│   │   │       ├── constants.js
│   │   │       ├── <FEATURE>.vue
│   │   │       ├── getters.js
│   │   │       ├── mutations.js
│   │   │       └── types.js
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   ├── actions.js
│   │   ├── App.vue
│   │   ├── constants.js
│   │   ├── getters.js
│   │   ├── mutations.js
│   │   └── types.js
│   ├── assets  -> datas, fonts, images, medias, styles
│   ├── client.js
│   ├── index.html
│   └── server.js
├── tools
│   └── ...
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
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
├── webpack.config.js
└── yarn.lock
```
