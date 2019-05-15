// DEVELOPMENT WEBPACK CONFIGURATION
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var { resolve } = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Request-Headers': 'content-type, accept'
    },
    contentBase: resolve(__dirname, 'dist/assets'),
    overlay: { 
      warnings: true, 
      errors: true, 
    },
    historyApiFallback: true,
    hot: true,
    port: 8080,
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/auth', '/ws', '/js/variables.js'],  // can have multiple
        target: 'http://localhost:8085',//'http://localhost:8085', // server and port to redirect to
        secure: false,
        ws: true
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
