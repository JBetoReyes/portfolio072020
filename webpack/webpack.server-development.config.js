const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.server-base.config');

const config = (env) => {
  return {
    ...merge(baseConfig(env), {
      mode: 'development',
      output: {
        filename: 'assets/app.js',
      },
    }),
  };
};

module.exports = config;
