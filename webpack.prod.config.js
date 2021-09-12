const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EsiWebpackPlugin = require('esi-webpack-plugin');
const dotenv = require('dotenv');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/nl/nl/customer-service/support/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  mode: 'production',
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          format: {
            comments: false,
          },
        },
        // Can be async
        minify: (file, sourceMap) => {
          const uglifyJsOptions = {
            /* your `uglify-js` package options */
          };

          if (sourceMap) {
            uglifyJsOptions.sourceMap = {
              content: sourceMap,
            };
          }

          return require('uglify-js').minify(file, uglifyJsOptions);
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'initial',
        },
        commons: {
          test: /[\\/]node_modules[\\/](!@ingka)[\\/]*/,
          name: 'vendor',
          chunks: 'all',
        },
        ingka: {
          test: /[\\/]node_modules[\\/]@ingka[\\/]*/,
          name: 'ingka',
        },
      },

      chunks: 'all',
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build/'),
    hot: true,
    port: 3000,
    open: false,
    writeToDisk: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),

    new EsiWebpackPlugin({
      onError(src, err) {
        console.error(`Error when resolving ${src}: ${err}`);
      },
      processOptions: {
        headers: {},
      },
    }),

    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_CMS_DATA: JSON.stringify('https://base-url/app-data'),
        REACT_APP_CURRENT_MARKET_CONFIG: JSON.stringify('netherlands'),
      },
    }),

    new CompressionPlugin(),

    new MiniCssExtractPlugin(),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
};
