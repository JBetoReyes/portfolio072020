import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import Home from '../frontend/app/home/Home.component';
import store from '../frontend/app/store/store';
import getHtmlIndex from './utils/getHtmlIndex';

dotenv.config();

const { ENV: env, PORT: port } = process.env;

(async () => {
  const app = express();
  const htmlSkeleton = await getHtmlIndex(env as string);
  app.get('*', (req, res) => {
    const reactApp = renderToString(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const html = htmlSkeleton.replace('\${html}', reactApp);
    res.send(html);
  });
  app.listen(port, () => {
    console.log(`App running on port: ${port}`);
  });
})();
