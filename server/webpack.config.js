// webpack.config.js
const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  devtool: "nosources-source-map",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          __dirname,
          path.join(__dirname, "../client", "./src")
        ],
        exclude: /node_modules/,
        use: [
          { loader: 'isomorphic-style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          __dirname,
          path.join(__dirname, "../client", "./src")
        ],
        exclude: /node_modules/,
        query: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ],
          plugins: [
            "css-modules-transform",

            // Stage 2
           ["@babel/plugin-proposal-decorators", { legacy: true }],
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-throw-expressions",

            // Stage 3
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-syntax-import-meta",
           ["@babel/plugin-proposal-class-properties", { "loose": false }],
            "@babel/plugin-proposal-json-strings"
          ]
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: "../client/build", to: "build" }], {
      debug: "info"
    })
  ]
};