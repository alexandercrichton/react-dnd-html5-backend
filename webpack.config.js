var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  output: {
    path: "../app/Refresh HTML/WYSIWYG/src/lib",
    filename: 'react-dnd-html5-touch-backend.js',
    libraryTarget: 'umd',
    library: 'react-dnd-html5-touch-backend'
  }
  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false
  //     }
  //   })
  // ]
};
