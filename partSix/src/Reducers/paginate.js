import union from 'lodash/union';


//Creates a reducer managing pagination, given the action types to handle,
//and a function telling how to extract the key from an action.
const paginate = ({ types, mapActionToKey }) => {
	if (!Array.isArray(types) || types.length !== 3) {
		throw new Error('Expected types to be an array of three elements');
	}

	if (!types.every(t => typeof t ==='string')) {
		throw new Error('Expected types to be strings');
	}

	if (typeof mapActionToKey !== 'function') {
		throw new Error('Expected mapActionToKey to be a function');
	}

	const [requestType, successType, failureType] = types;

	const 
}
