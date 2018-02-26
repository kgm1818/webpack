const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    index: './src/index.js',
    polyfills: './src/polyfills.js'
  },
  output: {
    path:path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'import-loader?this=>window'
      },
      {
        test: require.resolve('./src/globals.js'),
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