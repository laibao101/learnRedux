import { createStore } from 'redux';

//import reduce
import rootReducer from './reducers';


const defaultState = {
	todos:[]
};

const store = createStore(rootReducer,defaultState);


export default store;
