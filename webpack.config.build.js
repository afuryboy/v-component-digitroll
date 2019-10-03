const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const buildConfig = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'v-component-digitroll.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    library: 'v-component-digitroll',
    libraryExport: 'default',
    libraryTarget: 'umd'
  }
}
module.exports = merge(baseConfig,buildConfig)