## webpack 基础进阶
[文档详情](https://doc.webpack-china.org/guides/caching/#-output-filenames-)

##### 缓存

  10webpack-demo

##### 创建Library

  11webpack-demo

##### 渐进式网络应用程序

  15webpack-demo

##### Vagrant   nginx

##### 集成(Integrations)

首先我们要消除一个常见的误解。webpack 是一个模块打包器(module bundler)（例如，Browserify 或 Brunch）。它不是一个任务执行器(task runner)（例如，Make, Grunt 或者 Gulp ）。任务执行器就是用来自动化处理常见的开发任务，例如项目的检查(lint)、构建(build)、测试(test)。相对于打包器(bundler)，任务执行器则聚焦在偏重上层的问题上面。你可以得益于，使用上层的工具，而将打包部分的问题留给 webpack。

打包器(bundler)帮助你取得准备用于部署的 JavaScript 和样式表，将它们转换为适合浏览器的可用格式。例如，JavaScript 可以压缩、拆分 chunk 和懒加载，以提高性能。打包是 web 开发中最重要的挑战之一，解决此问题可以消除开发过程中的大部分痛点