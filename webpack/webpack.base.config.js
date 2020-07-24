const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const publicPath = resolve(__dirname, '..', 'src', 'public');

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
      alias: {
        Styles: resolve(publicPath, 'styles'),
      },
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
