const { AotPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: './src/main-backend.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  target: 'node',
  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
    })
  ],
  module: {
    rules: [{
      test: /\.ts$/,
      loader: '@ngtools/webpack',
    }]
  }
};
