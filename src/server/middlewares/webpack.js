import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { resolve } from 'path';

const { ENV: env, PORT: port } = process.env;

const webpackMiddlewareProvider = async (app) => {
  const webpackConfig = require('../../../webpack/webpack.server-development.config')(
    'development'
  );
  const {
    output: { publicPath },
  } = webpackConfig;
  const compiler = webpack(webpackConfig);
  const webpackServerConfig = {
    publicPath,
    serverSideRender: true,
  };
  app.use(webpackDevMiddleware(compiler, webpackServerConfig));
  app.use(webpackHotMiddleware(compiler));
};

export default webpackMiddlewareProvider;
