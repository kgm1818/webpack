const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: require.resolve('index.js'),
        use: 'import-loader?this=>window'
      },
      {
        test: require.resolve('globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    })
  ]
};