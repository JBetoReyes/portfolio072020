const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.server-base.config.js');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = (env) => {
  return {
    ...merge(baseConfig(env), {
      mode: 'production',
      plugins: [new WebpackManifestPlugin()],
    }),
  };
};

module.exports = config;
