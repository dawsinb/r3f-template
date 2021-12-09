/* eslint-disable */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, '/src'), 'node_modules'],
    alias: {
      Components: path.join(__dirname, '/src/components/'),
      Shaders: path.join(__dirname, '/src/shaders/'),
      Fonts: path.join(__dirname, '/src/fonts/'),
      Utils: path.join(__dirname, '/src/utils/')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
  devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new WorkboxPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 10000000
    })
  )
}

module.exports = config