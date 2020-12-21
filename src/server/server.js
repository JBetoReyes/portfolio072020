import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import webpackMiddlewareProvider from './middlewares/webpack';
import getHtmlIndex from './utils/getHtmlIndex';

(async () => {
  dotenv.config();

  const { ENV: env, PORT: port } = process.env;

  const app = express();
  const htmlSkeleton = await getHtmlIndex();
  console.log(htmlSkeleton);
  if (env === 'development') {
    webpackMiddlewareProvider(app);
  } else {
    app.use(express.static(resolve(__dirname, 'public')));
  }

  app.get('*', (req, res) => {
    console.log('Hello World');
    res.send(htmlSkeleton);
  });

  app.listen(port, (err) => {
    if (err) return console.log(err);
    return console.log(`App running on port ${port}`);
  });
})();
