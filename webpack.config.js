const path = require('path');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

//paths
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');
const HTML_TEMPLATE_PATH = path.resolve(__dirname, 'src', 'index.html');

module.exports = {
  entry: [SRC_DIR + '/index.tsx'],
  output: {
    path: DIST_DIR,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: NODE_MODULES_DIR
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: NODE_MODULES_DIR
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE_PATH
    })
  ]
};
