export = (config: any) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: './test-shim.js', watched: false }
    ],
    exclude: [],
    preprocessors: {
      './test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: {
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
        }]
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    autoWatch: false,
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: ['Chrome_no_sandbox'],
    singleRun: true,
    concurrency: Infinity
  });
};
