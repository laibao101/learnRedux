import { REACT_JS } from '../ActionTypes';

export default function rootReducer(state=[],action) {
	switch (action.type) {
		case REACT_JS:
			console.log('react js');
			return state;
		default:
		return state;
	}
}
