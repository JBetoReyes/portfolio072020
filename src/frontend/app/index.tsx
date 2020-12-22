import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Home from './home/Home.component';
import '@styles/Main.scss';
import store from './store/store';

ReactDom.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
