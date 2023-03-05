const config = require('dotenv-safe').config({});

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (_env, argv) => {
  const IS_PRODUCTION = argv.mode == 'production';

  if (!IS_PRODUCTION) {
    console.log(
      `Application has been started in dev mode with the following environment`,
      config
    );
  } else {
    console.log('Production mode');
  }

  const getEntry = () => {
    if (IS_PRODUCTION) {
      return {
        background: './src/background/background.js',
        content: './src/content/content.js',
        popup: './src/index.tsx',
      };
    }

    return './src/index.tsx';
  };

  const getPlugins = () => {
    if (IS_PRODUCTION) {
      return [
        new HtmlWebpackPlugin({
          template: './src/popup/popup.html',
          filename: 'popup.html',
          chunks: ['popup'],
        }),
      ];
    }

    return [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ];
  };

  const getFileName = () => {
    if (IS_PRODUCTION) {
      return '[name].js';
    }

    return 'bundle.js';
  };

  return {
    entry: getEntry(),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: getFileName(),
    },
    node: {
      global: true,
    },
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      port: 8080,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      fallback: {
        os: require.resolve('os-browserify/browser'),
        util: require.resolve('util/'),
        fs: false,
        path: require.resolve('path-browserify'),
      },
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
      ...getPlugins(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'manifest.json',
            to: '',
          },
        ],
      }),

      new DefinePlugin({
        'process.env': JSON.stringify(config.parsed),
      }),
    ],
  };
};
