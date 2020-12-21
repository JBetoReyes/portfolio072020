const { resolve, join } = require('path');

const config = (env) => {
  return {
    entry: resolve(__dirname, '..', 'src', 'frontend', 'app', 'index.tsx'),
    output: {
      path: resolve(__dirname, '..', 'src', 'server', 'public'),
      filename: join('assets', 'app-[hash].js'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: {
            loader: 'awesome-typescript-loader',
          },
        },
      ],
    },
  };
};
module.exports = config;
