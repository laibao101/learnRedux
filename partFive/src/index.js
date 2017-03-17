import React from 'react';
import { Provider } from 'react-redux';
import App from './Components/App';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import reducers from './Reducers';
import logger from 'redux-logger';

const root = document.getElementById('root');

const log = logger();

const store = createStore(
	reducers,
	applyMiddleware(log)
);

render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	root
);
