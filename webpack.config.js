const path = require('path');

module.exports = {
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
  }
};
