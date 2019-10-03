const webpack = require('webpack')
const path = require('path')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const isPortReachable = require('is-port-reachable');

let port = 8081

async function checkPort() {
  let reachable = await isPortReachable(port)
  if (reachable) {
    //console.log(`端口: ${port}被占`);
    port++
    return await checkPort()
  } else {
    //console.log(`端口: ${port}可以使用`);
    return port
  }
}
module.exports = (env,argv) => {
  // return config
  console.log(env);
  console.log(argv);
  return new Promise((resolve, reject) => {
    checkPort().then(res=>{
      let devConfig = {
        mode: 'development',
        devtool: 'eval-source-map',
        entry: env && env.cdn ? './example/cdn/index.js' : './example/index.js',
        devServer: {
          host: '0.0.0.0',
          port: port,
          noInfo: true,
          hot: true,
          overlay: {
            warnings: true,
            errors: true
          },
          stats: 'none',
        },
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
          }),
          new webpack.HotModuleReplacementPlugin(),
          new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
              messages: [`You application is running here http://localhost:${port}`],
            },
          })
        ],
      }
      let HtmlWebpackPlugin1;
      if (env && env.cdn) {
        HtmlWebpackPlugin1 = new HtmlWebpackPlugin({
            title: 'vue数字滚动组件',
            inject: true,
            filename: 'index.html',
            template: './example/cdn/index.html',
            hash: true,
            cdn:[
              'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js',
              '/dist/v-component-digitroll.js'
            ],
        })
      } else {
        HtmlWebpackPlugin1 = new HtmlWebpackPlugin({
            title: 'vue数字滚动组件',
            inject: true,
            filename: 'index.html',
            template: './example/index.html',
            hash: true
        })
      }
      let config = merge(baseConfig,devConfig)
      config.plugins.push(HtmlWebpackPlugin1)
      resolve(config)
    })
  })
}