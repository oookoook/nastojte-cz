'use strict'

const path = require('path');
const webpack = require('webpack');

const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const SocialTags = require('social-tags-webpack-plugin');
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

const config = require('./src/config.js');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    /*
    hot: true,
    watchOptions: {
      poll: true
    }
    */
    contentBase: path.join(__dirname, 'dist'),
    
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
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      },
      /*
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      },
      */
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
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
      }
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
      title: 'Nastojte.cz - Adam Kučera',
      meta: {
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        description: 'Adam Kučera - softwarový vývojář na volné noze.',
        keywords: 'vývoj, vývojář, software, aplikace, web, programátor, programování, Javascript, AWS',
        author: 'Adam Kučera',
        /*
        'og:url': "https://nastojte.cz/",
        'og:type': "website",
        'og:title': "Nastojte.cz - Adam Kučera",
        //'og:image': './assets/favicon-code.png',
        'og:description': "Adam Kučera - softwarový vývojář na volné noze.",
        'og:site_name': "Nastojte.cz - Adam Kučera",
        'og:locale': "cs_CZ",
        'og:article:author': "Adam Kučera"
        */
      },
      inject: true
    }),
    new SocialTags({
      appUrl: 'https://nastojte.cz/',
      facebook: {
        'og:url': "https://nastojte.cz/",
        'og:type': "website",
        'og:title': "Nastojte.cz - Adam Kučera",
        'og:image': './assets/favicon.png',
        'og:description': "Adam Kučera - softwarový vývojář na volné noze.",
        'og:site_name': "Nastojte.cz - Adam Kučera",
        'og:locale': "cs_CZ",
        'og:article:author': "Adam Kučera",
      },
      twitter: {
        "twitter:card": "Adam Kučera - softwarový vývojář na volné noze.",
        "twitter:url": "https://nastojte.cz/",
        "twitter:title": "Nastojte.cz - Adam Kučera",
        "twitter:description": "Adam Kučera - softwarový vývojář na volné noze.",
        "twitter:image": './assets/favicon.png'
      },
      
    }),
    new webpack.ProvidePlugin({
      $: "jquery", 
      jQuery: "jquery"
    })].concat(process.env.NODE_ENV === 'development' ? [] : 
    [new PrerenderSpaPlugin({
      // Path to compiled app
      staticDir: path.join(__dirname, 'dist'),
      // List of endpoints you wish to prerender
      routes: [ '/', '/vonnegut'],
      // Optional minification.
      minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        keepClosingSlash: true,
        sortAttributes: true
      },

      renderer: new Renderer({
        renderAfterDocumentEvent: 'render-event',
        headless: true,
      })
    }),
  ])
};