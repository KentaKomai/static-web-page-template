const webpack = require("webpack")

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: 'source-map',
  entry: {
    app: './assets/src/es6/hello.js'
  },
  output: {
    path:__dirname + '/assets/dist/javascripts',
    filename: '[name].bundle.js',
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      },
      {
        test: /\.styl/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style-loader!css-loader?modules&stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      }
    ]
  }
}
