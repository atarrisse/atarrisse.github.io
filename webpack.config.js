const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const settings = require('./package.json');
const data = require('./data.json');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: settings.title,
      template: './src/index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:srcset', 'source:src', 'source:srcset'],
            },
          },
          {
            loader: path.resolve('webpack/loaders/pug-html-loader'),
            options: {
              cache: true,
              data: {
                data
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  }
};