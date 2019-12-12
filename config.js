{
  mode: 'development',
  context: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/dist',
    filename: 'js/[name].js',
    publicPath: '/best-practice/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules',
      '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_@vue_cli-service@4.1.1@@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_@vue_cli-plugin-babel@4.1.1@@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules',
      '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_@vue_cli-service@4.1.1@@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/.cache/vue-loader',
              cacheIdentifier: 'adb7f46a'
            }
          },
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-loader@15.7.2@vue-loader/lib/index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              cacheDirectory: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/.cache/vue-loader',
              cacheIdentifier: 'adb7f46a'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_url-loader@2.3.0@url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_url-loader@2.3.0@url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_url-loader@2.3.0@url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_sass-loader@8.0.0@sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  javascriptEnabled: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  javascriptEnabled: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_css-loader@3.3.0@css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/.cache/babel-loader',
              cacheIdentifier: '59fcb487'
            }
          },
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_@vue_cli-service@4.1.1@@vue/cli-service/lib'
        ],
        use: [
          {
            loader: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_eslint-loader@2.2.1@eslint-loader/index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: 'e219901c',
              emitWarning: false,
              emitError: false,
              eslintPath: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/node_modules/_eslint@5.16.0@eslint',
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/best-practice/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/public/index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/public',
          to: '/Users/jiaxiaoxiao/Documents/my/vue/vue-antd-router-vuex-pro/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  },
  name: 'vue项目实战'
}