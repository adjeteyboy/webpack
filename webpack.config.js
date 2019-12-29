// const webpack = require('webpack');
const path = require('path');

const postCSSPlugins = [
  require('autoprefixer')
]

module.exports = {
  entry: {
    home: './src/assets/scripts/home.js',
    product: './src/assets/scripts/product.js',
    utilities: './src/assets/scripts/utilities.js'
  },
  output: {
    path: path.resolve(__dirname + '/src/assets/bundled'),
    filename: '[name].bundled.js'
  },
  devServer: {
    contentBase: path.join(__dirname + '/src'),
    hot: true,
    port: 3000
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}},'sass-loader'
        ]
      }
    ]
  }
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin('vendors.js')
  // ]
}