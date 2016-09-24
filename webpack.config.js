const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const webpack      = require('webpack-stream').webpack;
const stylelint    = require("stylelint");
const cssnext      = require("postcss-cssnext");

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: './src/js/index.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  stats: {
    children: false
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ],
  postcss: () => {
    return {
      defaults: [stylelint, cssnext]
    };
  },
  module: {
    loaders: [{
      test:   /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader!eslint-loader'
    }]
  }
};
