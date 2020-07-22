const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const rootPath = resolve(__dirname, '..');
  return {
    entry: resolve(rootPath, 'src', 'app',  'index.tsx'),
    output: {
      filename: 'app-[hash:6].js',
      path: resolve(rootPath, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
      new HtmlPlugin({
        template: resolve(rootPath, 'src', 'public', 'index.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['**/app*'],
      }),
    ],
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
