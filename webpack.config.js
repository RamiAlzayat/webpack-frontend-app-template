/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (env) {
  const isEnvProduction = env.production;
  const isEnvDevelopment = env.development;
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry: './src/index.js',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(woff(2)?|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets', to: 'assets', noErrorOnMissing: true },
        ],
      }),
    ],
  };
};
