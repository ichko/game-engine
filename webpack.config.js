const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './example/src'),
  resolve: {
    modules: ['./node_modules', './'],
  },
  entry: {
    app: ['./index.js'],
  },
  output: {
    path: path.resolve(__dirname, './example/dist'),
    filename: 'bundle.js',
  },
  devtool: '#inline-source-map',
  watch: true
};
