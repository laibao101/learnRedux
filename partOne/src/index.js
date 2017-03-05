import React from 'react';
import App from  './Components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';


render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	document.getElementById('root')
)
