import { SET_VISIBILITY_FILTER } from '../ActionTypes';

const visibilityFilter = (state="SHOW_ALL",action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return state.filter;
		default:
			return state;
	}
}

export default visibilityFilter;
