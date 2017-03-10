import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import App from './Containers';
import rootReducer from './Reducers';


const defaultState = {
	news:[]
}

const store = createStore(rootReducer,defaultState)

const root = document.getElementById('root');

render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	root
)
