const path = require('path');
const webpack = require('webpack');

module.exports = {  
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
	publicPath: '/dist'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { 
          presets: [ 
            'es2015' 
          ] 
        }
      }
    ]
  }
};