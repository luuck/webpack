# 自定义的vue-cli工程模板

> 更好的服务目前所在团队的业务，自定义的一份vue项目模板。从vuejs-template官方模板fork过来进一步修改的。

## 使用

```
vue init lzf0402/webpack#develop your_project_name

cd your_project_name

npm install

npm run dev // 本地开发

npm run build // 打包构建
```

## 功能特点

- vuejs全家桶（vue+vuex+router） + element-ui
- moment + lodash + axios 常用包
- mock 目录可选
- husky + lint-staged 代码检测
- 

## 工程目录结构

```
├─build // 打包构建
├─config // 打包配置
├─mock // 假数据
├─src
  ├─api  //接口
  ├─assets //图片
  ├─common  //公用函数 util、公用过滤器filter
  ├─components  //公用组件
  ├─css  //样式
  ├─pages  //页面
  ├─router //路由
  └─store  //vuex

```

