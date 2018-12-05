const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const customAntdStyle = require('fee-custom-antd-style');

module.exports = {
  mode: 'development',
  entry: './example/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: customAntdStyle,
            }
          }
        ]
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: true }],
                floatPrecision: 2,
              },
            },
          },
        ],
      }, {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[ext]',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.ejs'
    })
  ],
  devServer: {
    https: false,
    host: 'localhost',
    port: 3000,
    hot: false,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
};