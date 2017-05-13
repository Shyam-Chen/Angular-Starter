const ngtools = require('@ngtools/webpack');
const webpackMerge = require('webpack-merge');

const commonPartial = require('./tools/webpack.common');
const clientPartial = require('./tools/webpack.client');
const serverPartial = require('./tools/webpack.server');
const prodPartial = require('./tools/webpack.prod');
const { getAotPlugin } = require('./tools/webpack.aot');

module.exports = (options = {}, webpackOptions) => {
  if (options.aot) {
    console.log(`Running build for ${options.client ? 'client' : 'server'} with AoT Compilation`)
  }

  const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
    entry: options.aot ? './src/main.server.aot.ts' : serverPartial.entry,  // Temporary
    plugins: [
      getAotPlugin('server', !!options.aot)
    ]
  });

  let clientConfig = webpackMerge({}, commonPartial, clientPartial, {
    plugins: [
      getAotPlugin('client', !!options.aot)
    ]
  });

  if (webpackOptions.p) {
    clientConfig = webpackMerge({}, clientConfig, prodPartial);
  }

  const configs = [];
  if (!options.aot) {
    configs.push(clientConfig, serverConfig);

  } else if (options.client) {
    configs.push(clientConfig);

  } else if (options.server) {
    configs.push(serverConfig);
  }

  return configs;
}
