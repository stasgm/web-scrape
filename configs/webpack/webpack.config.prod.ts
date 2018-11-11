import { Configuration, EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { getWebpackConfigBase, cssLoader, cssModulesLoader } from './webpackConfigBase';
import { getRootRelativePath } from './utils';

const OUTPUT_FILENAME = 'scripts/[name].[hash].bundle.js';
const OUTPUT_CHUNK_FILENAME = 'scripts/[name].[chunkhash].chunk.js';
const EXTRACT_CSS_FILENAME = 'styles/[name].[chunkhash].css';
const STYLES_PATH = getRootRelativePath('src/styles');

const config: Configuration = merge(getWebpackConfigBase(OUTPUT_FILENAME, OUTPUT_CHUNK_FILENAME), {
  devtool: false,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              // cacheDirectory: true,
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      // sass/css
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.css$/,
        include: STYLES_PATH,
        use: [MiniCssExtractPlugin.loader, cssLoader]
      },
      {
        test: /\.css$/,
        include: getRootRelativePath('src'),
        exclude: STYLES_PATH,
        use: [MiniCssExtractPlugin.loader, cssModulesLoader]
      }
    ]
  },
  output: {
    publicPath: './' // TODO test
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: true,
        cache: true,
        parallel: true
      })
      // new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: getRootRelativePath('')
    }),
    new MiniCssExtractPlugin({ filename: EXTRACT_CSS_FILENAME }),
    // new BundleAnalyzerPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'production'
    })
  ]
});

// tslint:disable-next-line no-default-export
export default config;
