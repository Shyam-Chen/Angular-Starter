const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { AotPlugin } = require('@ngtools/webpack');

module.exports = {
  context: join(__dirname, 'src'),
  entry: {
    polyfills: './polyfills.ts',
    main: './main.ts'
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
        // loader: '@ngtools/webpack'
      // }, {
      //   test: /\.html$/,
      //   loader: 'html-loader'
      // }, {
      //   test: /\.css$/,
      //   exclude: join(__dirname, 'src/app'),
      //   loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      // }, {
      //   test: /\.css$/,
      //   include: join(__dirname, 'src/app'),
      //   loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    // new AotPlugin({
    //   tsConfigPath: 'tsconfig.json',
    //   entryModule: 'src/app/app.module#AppModule'
    // })
  ],
  devServer: {
    contentBase: join(__dirname, 'build'),
    historyApiFallback: true,
    inline: true,
    port: 8000
  },
  devtool: 'source-map'
};
