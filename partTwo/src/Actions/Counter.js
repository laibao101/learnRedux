

//reducers

export const INCREMENT_COUNTER =  'INCREMENT_COUNTER';
export const DECREMENT_COUNTER =  'DECREMENT_COUNTER';


//export add method
export function increment () {
	return {
		type:INCREMENT_COUNTER
	};
}

//export
export function decrement () {
	return {
		type:DECREMENT_COUNTER
	};
}

//export
export function incrementIfOdd () {
	return (dispatch,getState) => {
		//get the counter attribute in the state Object
		const { counter } = getState();

		//if odd, then return
		if (counter%2 === 0) {
			return ;
		}
		//if not odd
		dispatch(increment());
	}
}


export function incrementAsync (delay=1000) {
	return dispatch => {
		setTimeout(() => {
			dispatch(increment ());
		},delay)
	}
}
