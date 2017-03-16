import { SET_VISIBILITY_FILTER } from '../ActionTypes';

export default const visibilityFilter = (state="SHOW_ALL",action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return state.filter;
		default:
			return state;
	}
}
