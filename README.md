# Node server boilerplate
Node server boilerplate is to help you kick start your node server.

## Prerequisite:

* [yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/)

## Setup:

1. `yarn` or `npm install`
3. `yarn start` to start server 
4. `yarn json-server` to create test json api `http://localhost:3001/`

---

## Features: 

1. [axios](https://github.com/axios/axios) to handle all third party api calls if required `['GET','POST','PUT','DELETE', ...]`
2. [express](https://expressjs.com/) web application framework
3. [json-server](https://github.com/typicode/json-server) no need to wait for third party api to start development, use `json-server` to have test data and test third party api ready for use
4. [nodemon](https://github.com/remy/nodemon) to restart server on any file change during development
5. [mongoose](https://github.com/Automattic/mongoose) is a MongoDB object modeling tool designed to work in an asynchronous environment.
6. [eslint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) the project contains eslint with `eslint-config-airbnb-base` extended, to fix and flag javascript code errors.
7. [flow](https://flow.org/en/) static type checker for javascript, [flow-remove-types](https://github.com/flowtype/flow-remove-types) is used to remove flow type annotation to a `dist` server folder that should be deployed.
8. [husky](https://github.com/typicode/husky) to add `pre-commit` hook that will trigger `yarn lint` && `yarn flow` to make sure no bad commits are pushed

---

## Editor recommendation:

You can use any prefered editor, in case you are using [Atom](https://atom.io/) the following packages can help speed up your development process:

* [react](https://atom.io/packages/react)
* [linter-eslint](https://atom.io/packages/linter-eslint)
* [flow-ide](https://atom.io/packages/flow-ide)


