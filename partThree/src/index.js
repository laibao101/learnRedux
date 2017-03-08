import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './Containers';
import { createStore } from 'redux';
import rootReducer from './Reducers';


const defaultState = {
	products:[
		{
			id:1,
			name:'laowang',
			num:2,
			price:21
		},
		{
			id:2,
			name:'xiaowang',
			num:10,
			price:99
		}
	]
}


const store = createStore(rootReducer,defaultState);


const root = document.getElementById('root');

render(
	<Provider store={store}>
		<App></App>
	</Provider>,
	root
)
