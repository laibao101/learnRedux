import React from 'react';
import { Provider } from 'react-redux';
import App from './Components/App';
import { createStore } from 'redux';
import { render } from 'react-dom';
import reducers from './Reducers';

const root = document.getElementById('root');

const store = createStore(reducers);

render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	root
);
