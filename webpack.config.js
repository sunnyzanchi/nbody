const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './public',
    hot: true,
    open: true,
    port: 3000,
    publicPath: '/js'
  },
  entry: './src/js/main.ts',
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      Classes: path.join(__dirname, 'src/js/Classes'),
      Interfaces: path.join(__dirname, 'src/js/Interfaces')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
