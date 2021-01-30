/*
 * @Description: 
 * @Author: WangYong
 * @Date: 2021-01-30 23:16:33
 * @LastEditor: WangYong
 * @LastEditTime: 2021-01-31 03:19:09
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'
const srcPath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../dist')

let config = {
  entry: {
    app: ['./index.ts'],
  },
  context: srcPath,
  output: {
    path: outputPath,
    filename: devMode ? 'js/[name]_[hash:8].js' : 'js/[name]_[chunkhash:8].js',
    chunkFilename: 'chunks/[name]_[chunkhash:8].js',
    publicPath: './',
  },
  resolve: {
    alias: {
      static: `${srcPath}/static/`,
      scene: `${srcPath}/scene/`,
      utils: `${srcPath}/utils/`,  
      assets: `${srcPath}/assets`,
      plugins: `${srcPath}/plugins`,
      api: `${srcPath}/api/`,
    },
    extensions: ['.js', 'json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x?)$/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
        exclude: [
          path.resolve(__dirname, `/lib`),
          path.resolve(__dirname, '../node_modules'),
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: '[name]_[hash:8].[ext]',
            outputPath: 'images/',
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: false,
            name: '[name]_[hash:8].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cocos',
      filename: 'index.html',
      template: './index.html',
      favicon: './favicon.ico',
      chunks: ['app'],
    }),
    new CopyPlugin([
      { from: `${srcPath}/lib`, to: `${outputPath}/lib` },
      { from: `${srcPath}/assets`, to: `${outputPath}/assets` },
      { from: `${srcPath}/project.json`, to: `${outputPath}/project.json` },
    ]),
    new webpack.HashedModuleIdsPlugin(),
  ],
  externals: {
    cocos: 'cc'
  }
}
module.exports = config
