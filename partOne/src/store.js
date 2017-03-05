import { createStore } from 'redux';

//import reduce
import rootReducer from './reducers';

const todos = [
	{
		id:1,
		text:'dfsafd'
	},{
		id:2,
		text:'fdsa43432'
	}
];


const defaultState = {
	todos:todos
};

const store = createStore(rootReducer,defaultState);


export default store;
