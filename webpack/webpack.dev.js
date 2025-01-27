// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const portfinder = require('portfinder')
const devProxy = require('./dev.proxy')
// const DashboardPlugin = require('webpack-dashboard/plugin')

// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
// const smp = new SpeedMeasurePlugin()

const jsRegex = /\.(js|ts)$/

const devWebpackConfig = merge(common, {
  mode: 'development',
  // devtool: 'source-map',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    open: true,
    proxy: devProxy,
  },

  module: {
    rules: [
      {
        test: jsRegex,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    // new webpack.HotModuleReplacementPlugin(),
    // new DashboardPlugin()
  ].filter(Boolean),
  optimization: {
    providedExports: true,
    usedExports: true,
  },
})

// module.exports = smp.wrap(devWebpackConfig)
// module.exports = devWebpackConfig

module.exports = new Promise((resolve, reject) => {
  // @funboxteam/free-port-finder
  // detect-port
  portfinder.getPort(
    {
      port: 8080, // 默认8080端口，若被占用，重复+1，直到找到可用端口或到stopPort才停止
      stopPort: 65535, // maximum port
    },
    (err, port) => {
      if (err) {
        reject(err)
        return
      }
      devWebpackConfig.devServer.port = port
      resolve(devWebpackConfig)
    }
  )
})
