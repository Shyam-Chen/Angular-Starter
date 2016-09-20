module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [{
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      }, {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      }, {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      }, {
        test: /\.css$/,
        exclude: './src/app',
        loader: 'null'
      }, {
        test: /\.css$/,
        include: './src/app',
        loader: 'raw'
      }
    ]
  }
}
