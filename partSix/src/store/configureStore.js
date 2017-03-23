import { createStore, applyMiddleWare, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import api from '../Middleware/api';
import rootReducer from '../Reducers';
import DevTools from '../Containers/DevTool';


const configureStore = preloadedState => {
	const store = createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleWare(thunk,api,createLogger()),
			DevTools.instrument()
		)
	)
}

if (module.hot) {
	//Enable webpack hot module replacement for reducers
	module.hot.accept('../Reducers',() => {
		const nextRootReducer = require('../Reducers').default;
		store.replaceReducer(nextRootReducer)
	})

	return store;
}

export default configureStore;
