const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [{
      use: {
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }
    }]
  },
  context: path.resolve(__dirname, './'),
  resolve: {
    modules: ['./node_modules', './'],
  },
  entry: {
    example: ['./example/index.js'],
    engine: ['./engine/index.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    library: ['engine']
  },
  devtool: '#inline-source-map',
  watch: true
};
