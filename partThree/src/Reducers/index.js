import * as ActionTypes from '../ActionTypes';


export default function rootReducer (state={},action) {
	switch (action.type) {
		case ActionTypes.ADD_TO_CART:
			const { id } = action;
			const { products } = state;
			const index = products.findIndex(product => product.id === id);
			const product = products.find(product => product.id === id);
			const newProducts = [...products];
			newProducts[index] = {
				...product,
				num:product.num-1
			}
			return {
				products:newProducts
			}
		default:
			return state;
	}
}
