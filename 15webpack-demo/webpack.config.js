const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool:'inline-source-map',
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title:'Progressive Web Application'
    }),
    new WorkboxPlugin({
      // 这些选项帮助 ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};