import express, { Express } from 'express';
import { resolve } from 'path';

const addProdMiddlewares = (app: Express): void => {
  app.use(express.static(resolve(__dirname, '..', 'public')));
};

export { addProdMiddlewares };
