const webpack = require('webpack');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  
  plugins: [
    new uglifyJsPlugin({
      uglifyOptions:{
        compress: {
          warnings: false
        }
      }
    }),
  ],
  // optimization: {
  //   minimizer: [
  //     new uglifyJsPlugin({
  //       uglifyOptions:{
  //         compress: {
  //           warnings: false
  //         }
  //       }
  //     })
  //   ]
  // }
};