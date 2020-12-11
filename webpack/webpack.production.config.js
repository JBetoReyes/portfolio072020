const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConfig(env), {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    }
  }),
});
