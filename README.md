# vetur-yarn-workspace-typescript-definition-problem

This project uses yarn workspaces, vue-cli and typescript.

## Project setup
Execute
```
yarn
```
in the root folder

### Compiles and hot-reloads for development
At first build the common package by executing
```
cd common && yarn build
```
Then start the frontend with watch mode
```
cd frontend && yarn serve
```
When change files in the frontend workspace then hot reload takes place.
Whenever you change something in the common workspace you need to manually build it again.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
