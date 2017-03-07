import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './Store/StoreConfig';

const  root = document.querySelector('#root');

render(
  <Provider store={store}>
      <App />
  </Provider>,
  root
);
