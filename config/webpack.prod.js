/*
 * @Description: 
 * @Author: wangYong
 * @Date: 2020-05-08 18:53:00
 * @LastEditors: wangYong
 * @LastEditTime: 2020-05-09 13:30:31
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const OfflinePlugin = require('offline-plugin')
const baseConfig = require('./webpack.base')

let extendConfig = {
  plugins: [
    new CleanWebpackPlugin(),
    // new OfflinePlugin()
  ],

  // Enables UglifyJsPlugin, ModuleConcatenationPlugin and NoEmitOnErrorsPlugin by default
  mode: 'production',
}

module.exports = {
  ...baseConfig,
  ...extendConfig,
  plugins: [...baseConfig.plugins, ...extendConfig.plugins],
}
