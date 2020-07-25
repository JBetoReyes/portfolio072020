const { merge } = require('webpack-merge');
const { resolve } = require('path');
const baseConfig = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConfig(env), {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      contentBase: resolve(__dirname, '..', 'dist'),
      host: '0.0.0.0',
      open: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
  }),
});
