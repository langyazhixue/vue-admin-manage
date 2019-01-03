'use strict'
const path = require('path')
const utils = require('./utils')
const config =  require('../config')
const { VueLoaderPlugin } = require('vue-loader')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname,'..',dir)
}
const createLintingRule = () => ({
  test:'/\.(js|vue)$/',
  loader:'eslint-loader',
  enforce:'pre',
  include:[resolve('src'),resolve('test')],
  options:{
    formatter:require('eslint-friednly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay,
    emitError:!config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context:path.resolve(__dirname,'../'),
  entry:{
    app:'./src/main.js'
  },
  output:{
    filename:'[name].js',
    publicPath:
      process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$':'vue/dist/vue.common.js',
      '@': resolve('src')
    }
  },
  module:{
    rules:[
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test:/\.vue$/,
        loader:'vue-loader',
        options:vueLoaderConfig
      }, 
      {
        test:/\.js$/,
        loader:'babel-loader',
        options:{
          cacheDirectory:true
        },
        include:[
          resolve('src'),
          resolve('test'),
          resolve('node_modules/wbpack-dev-server/clients')
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',  // svg 雪碧图
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test:/\.(png|jpe?g|gif|svg)(\?.*)?$/, // 图片
        loader:'url-loader',
        exclude:[resolve('src/icons')],
        options:{
          limit:10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 视频音频
        loader:'url-loader',
        options:{
          limit:10000,
          name:utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },{
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader:'url-loader',
        options:{
          limit:10000,
          name:utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      } 
    ]
  },
  target:'web',
  plugins:[new VueLoaderPlugin()],
  node :{
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}


// https://www.webpackjs.com/concepts/

// https://webpack.docschina.org/configuration/