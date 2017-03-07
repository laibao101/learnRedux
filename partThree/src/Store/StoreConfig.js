import rootReducer from '../Reducers/index';
import { createStore } from 'redux';

const defaultState={
	products:[
		{
			name:'iPad 4 Mini',
			id:1,
			price:500.01,
			num:2
		},
		{
			name:'H&M T-Shirt White',
			id:2,
			price:10.99,
			num:1
		},
		{
			name:'Charli XCX - Sucker CD',
			id:3,
			price:19.99,
			num:3
		}
	],
	cartItems:[]
};

const store = createStore(rootReducer,defaultState);

export default store;
