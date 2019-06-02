'use strict'

const path  = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin') // // 输出打包目录前先把 dist/ 删掉
module.exports = {
  entry: {
      index: "../src/index.js",
      // utils: '../src/utils.js',
  },
  output: {
      filename: "[name].bundle.js", // 输出 index.js 和 utils.js
      chunkFilename: '[name].bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  MiniCssExtractPlugin.loader, // 创建一个 link 标签
                  'css-loader', // css-loader 负责解析 CSS 代码, 处理 CSS 中的依赖
              ],
          },
      ]
  },
  plugins: [
      new CleanWebpackPlugin(),
      // 用 MiniCssExtractPlugin 抽离出 css 文件，以 link 标签的形式引入样式文件
      new MiniCssExtractPlugin({
          filename: 'index.bundle.css' // 输出的 css 文件名为 index.css
      }),
  ]
}
