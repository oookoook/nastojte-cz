'use strict'

const path = require('path');
const webpack = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = require('./src/config.js');

//https://forum.vuejs.org/t/how-to-pre-render-multiple-vue-app-pages/69625
const addHydration = html => html
  .replace(/<script (.*?)>/g, '<script $1 defer>')
  .replace('id="app"', 'id="app" data-server-rendered="true"');

const postProcessRoute = (route) => {
  // eslint-disable-next-line no-param-reassign
  route.html = addHydration(route.html);
  return route;
};

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  //devtool: 'source-map', // bundle is too big
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    /*
    hot: true,
    watchOptions: {
      poll: true
    }
    */
    static: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: { loader: 'vue-loader',
          options: {
          transformToRequire: {
            iframe: 'src',
          },
        }},
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.md$/,
        use: 'file-loader'
      },
      /*
      {
        test: /\.(png|svg|jpg|gif|svg)$/,
        use: 'file-loader'
      },
      */
      {
        test: /\.(svg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|webp|tiff?)$/i,
        oneOf: [
          {
            // if the import url looks like "some.png?srcset..."
            resourceQuery: /srcset/,
            use: [
              {
                loader: "webpack-image-srcset-loader",
                options: {
                  sizes: ["128w","256w","320w","480w", "640w", "800w", "1024w", "original"],
                },
              },
              "file-loader",
              "webpack-image-resize-loader",
              // add webpack-sharp-loader if you want to pre-process your image e.g. rotating, flipping
              ],
          },
          {
            // if no previous resourceQuery match
            use: "file-loader",
          },
        ],
      },
      /*
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      */
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.(wav|ogg|mp3)$/,
        use: 'file-loader'
      },
      {
        test: /map\.html$/,
        use: 'file-loader'
      },
      {
        test: /\.ico$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      /*
      {
        test: /robots\.ico$/, use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      }
      */
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    //new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      //template: 'src/index.html',
      template: 'src/index.ejs',
      favicon: 'assets/favicon.ico',
      title: config.title,
      lang: config.lang,
      meta: config.meta,
      inject: true
    }),
    new CopyWebpackPlugin({ patterns: [
      { from: 'src/robots.txt', to: 'robots.txt' },
      { from: 'assets/favicon.png', to: 'favicon.png' }
    ]}),
    new ImageminWebpWebpackPlugin()
  ].concat((process.env.BUNDLE_REPORT==1) ? new BundleAnalyzerPlugin() : [])
  .concat(process.env.NODE_ENV === 'development' ? [] : 
    [new PrerenderSpaPlugin({
      // Path to compiled app
      staticDir: path.join(__dirname, 'dist'),
      // List of endpoints you wish to prerender
      routes: config.routesToPrerender, //[ '/', '/vonnegut'],
      // Optional minification.
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },
      postProcess: postProcessRoute,
      renderer: new Renderer({
        renderAfterDocumentEvent: 'render-event',
        headless: true,
      })
    }),
  ])
};