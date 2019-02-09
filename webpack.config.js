var path = require('path');
var webpack = require('webpack');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});


module.exports = {
  entry: './index.js',
  output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["babel-loader?cacheDirectory=true"]
      },
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: '/',
        historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    devFlagPlugin
  ]
};
