var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/Index.js',
    output: {
      path: __dirname,
      publicPath: '/bin',
      filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
          presets: ['es2015', 'react']
        }
        }]
    }
}
