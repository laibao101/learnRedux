import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './Containers';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';


const defaultState = {
	news:[]
}

const middleware = [ thunk ]

const store = createStore(rootReducer,applyMiddleware(...middleware))

const root = document.getElementById('root');

render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	root
)
