var path          = require('path')
var webpack       = require('webpack')

module.exports = {
  entry: './demo/entry.js',

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },

  devServer: {
    contentBase: 'demo/'
  }
}
