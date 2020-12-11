const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const srcPath = resolve(__dirname, '..', 'src');
const publicPath = resolve(srcPath, 'public');

module.exports = (env) => {
  const rootPath = resolve(__dirname, '..');
  return {
    entry: resolve(rootPath, 'src', 'app', 'index.tsx'),
    output: {
      filename: 'app-[hash:6].js',
      path: resolve(rootPath, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@styles': resolve(publicPath, 'styles'),
        '@src': srcPath,
        '@common': resolve(srcPath, 'app', 'common'),
        '@assets': resolve(publicPath, 'assets'),
      },
    },
    plugins: [
      new HtmlPlugin({
        template: resolve(rootPath, 'src', 'public', 'index.html'),
        favicon: resolve(rootPath, 'src', 'public', 'assets', 'profile-default.png'),
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
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'file-loader',
          },
        },
      ],
    },
  };
};
