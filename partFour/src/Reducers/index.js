import { REACT_JS } from '../ActionTypes';

export default function rootReducer(state=[],action) {
	switch (action.type) {
		case REACT_JS:
			return {
				news:action.data,
				title:action.value
			};
		default:
		return state;
	}
}
