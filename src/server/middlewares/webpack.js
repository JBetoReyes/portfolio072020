import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const { ENV: env, PORT: port } = process.env;

const webpackMiddlewareProvider = async (app) => {
  const webpackConfig = await import(
    '../../webpack/webpack.server-development.config'
  );
  const compiler = webpack(webpackConfig);
  const webpackServerConfig = {
    port,
    hot: true,
  };
  app.use(webpackDevMiddleware(compiler, webpackConfig));
  app.use(webpackHotMiddleware(compiler));
};

export default webpackMiddlewareProvider;
