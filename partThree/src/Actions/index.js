import * as ActionTypes from '../ActionTypes';

export function addToCart (id) {
	return {
		type:ActionTypes.ADD_TO_CART,
		id
	}
}


export function checkout () {
	return {
		type:ActionTypes.CHECKOUT
	}
}
