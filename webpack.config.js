const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ScriptExtHtmlPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const CopyPlugin = require('copy-webpack-plugin');
// const { GenerateSW } = require('workbox-webpack-plugin');
// const PurgecssPlugin = require('purgecss-webpack-plugin');
// const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;
// const SitemapPlugin = require('sitemap-webpack-plugin').default;
const envify = require('process-envify');
// const glob = require('glob-all');

const env = require('./env');
const pkg = require('./package');

const SOURCE_ROOT = path.join(__dirname, 'src');
const DIST_ROOT = path.join(__dirname, 'public');

module.exports = ({ prod = false } = {}) => ({
  mode: prod ? 'production' : 'development',
  context: SOURCE_ROOT,
  entry: {
    client: './client.ts',
  },
  output: {
    path: DIST_ROOT,
    filename: prod ? '[name].[hash].js' : '[name].js',
    chunkFilename: prod ? '[id].[chunkhash].js' : '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack',
      },
      {
        test: /\.css$/,
        use: [
          'to-string-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
        include: [path.join(SOURCE_ROOT, 'app')],
        exclude: [path.join(SOURCE_ROOT, 'assets')],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
        exclude: [path.join(SOURCE_ROOT, 'app')],
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('assets', 'images/[name].[hash].[ext]'),
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('assets', 'medias/[name].[hash].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('assets', 'fonts/[name].[hash].[ext]'),
        },
      },
    ].filter(Boolean),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '~': path.join(SOURCE_ROOT, 'app'),
      '~assets': path.join(SOURCE_ROOT, 'assets'),
    },
  },
  plugins: [
    new webpack.DefinePlugin(envify(env)),
    new HtmlPlugin({
      template: 'index.html',
      minify: prod && {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: prod ? 'manual' : 'auto',
    }),
    new ScriptExtHtmlPlugin({
      defaultAttribute: 'defer',
      preload: {
        test: /\.js$/,
        chunks: 'initial',
      },
      prefetch: {
        test: /\.js$/,
        chunks: 'all',
      },
    }),
    new AngularCompilerPlugin({
      tsConfigPath: './tools/tsconfig.app.json',
      entryModule: './src/app/app.module#AppModule',
      sourceMap: true,
    }),
    new CopyPlugin([
      {
        from: 'assets/**/*',
        to: DIST_ROOT,
        ignore: ['assets/styles/**/*'],
      },
    ]),
    !prod && new webpack.HotModuleReplacementPlugin(),
    prod && new webpack.optimize.AggressiveSplittingPlugin(),
    // prod && new GenerateSW({
    //   skipWaiting: true,
    //   clientsClaim: true,
    //   runtimeCaching: [{
    //     urlPattern: new RegExp(env.SITE_URL),
    //     handler: 'staleWhileRevalidate',
    //   }],
    //   navigateFallback: '/',
    //   navigateFallbackWhitelist: [/^(?!\/__).*/],
    //   cacheId: pkg.name,
    // }),
    // prod && new PurgecssPlugin({
    //   paths: glob.sync([
    //     path.join(SOURCE_ROOT, './app/**/*.html'),
    //   ]),
    //   whitelist: ['html', 'body'],
    // }),
    // prod && new RobotstxtPlugin(),
    // prod && new SitemapPlugin(env.SITE_URL, [{ path: '/' }]),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
  devServer: {
    contentBase: DIST_ROOT,
    historyApiFallback: true,
    host: env.HOST_NAME,
    hot: true,
    inline: true,
    overlay: true,
    port: env.SITE_PORT,
  },
  devtool: prod ? 'hidden-source-map' : 'cheap-module-eval-source-map',
});
