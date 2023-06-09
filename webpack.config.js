const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const production = process.env.NODE_ENV === 'production';



module.exports = {
  entry: { myAppName: path.resolve(__dirname, "./src/index.js") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !production
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !production
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      }

    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".scss"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "MEGACAMPUS",
      template: "./src/index.html",
      favicon: "./public/favicon.ico"
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  mode: production ? 'production' : 'development',
  // devServer: {
  //   historyApiFallback: true,
  // },
};