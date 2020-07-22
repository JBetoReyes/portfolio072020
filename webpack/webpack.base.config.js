const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
  const rootPath = resolve(__dirname, '..');
  return {
    entry: resolve(rootPath, 'src', 'index.tsx'),
    output: {
      filename: 'app-[hash:6].js',
      path: resolve(rootPath, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', 'js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['**/app*'],
      }),
    ],
    module: {
      rules: [
        {
          test: /.tsx?$/,
          user: {
            loader: 'awesome-typescript-loader',
          },
        },
      ],
    },
  };
};
