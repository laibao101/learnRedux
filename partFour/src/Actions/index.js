import { REACT_JS } from '../ActionTypes';

export function fetchReactjs (value) {
	return function (dispatch) {
		fetch(`https://www.reddit.com/r/${value}.json`)
	      .then(response => response.json())
	      .then(json => dispatch(reNews(json.data.children,value)))
	}

}


function reNews (data,value) {
	return {
		type:REACT_JS,
		data,
		value
	}
}
