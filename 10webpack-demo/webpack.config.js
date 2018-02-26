const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [ //将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中
      'lodash' //因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(), // 对于每次构建，vendor hash 都应该保持一致：(将第三方库 缓存 hash不变就不会重复请求)
    new webpack.optimize.CommonsChunkPlugin({ //同上注释
      name: 'vendor' // 注意，引入顺序在这里很重要。CommonsChunkPlugin 的 'vendor' 实例，必须在 'manifest' 实例之前引入。
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
}