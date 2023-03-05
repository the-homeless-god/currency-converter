const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // DEV MODE: entry: './src/index.tsx',
  entry: {
    background: './src/background/background.js',
    content: './src/content/content.js',
    popup: './src/index.tsx',
  },
  output: {
    // DEV MODE: filename: 'bundle.js',
    // path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 8080,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // DEV MODE: new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // }),
    new HtmlWebpackPlugin({
      template: './src/popup/popup.html',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'manifest.json',
          to: '',
        },
      ],
    }),
  ],
};
