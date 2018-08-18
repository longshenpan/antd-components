const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx$/,
      include: /src/,
      loader: 'babel-loader',
    }]
  }
};