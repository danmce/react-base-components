const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'main.[hash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, 'src')],
    publicPath: 'http://localhost:8000/',
    compress: true,
    hot: true,
    port: 8000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    })
  ]
})
