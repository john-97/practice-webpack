// DEVELOPMENT WEBPACK CONFIGURATION
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
var { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      resolve(__dirname, "app")
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      "module": "new-module",
      "only-module$": "new-module",
      "module": resolve(__dirname, "app/third/module.js"),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
