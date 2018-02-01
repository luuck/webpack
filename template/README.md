# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

> 说明：开发环境启动里加了mock-server 所以跟vue原版的启动不同，dev的定义：
> "dev": "node build/dev-server.js"
> 原版的dev启动命令定义：
> "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"

# eslint 修正语法
npm run dolint

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
