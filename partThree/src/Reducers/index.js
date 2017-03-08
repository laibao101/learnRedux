import * as ActionTypes from '../ActionTypes';


export default function rootReducer (state=[],action) {
	switch (action.type) {
		case ActionTypes.ADD_TO_CART:
			console.log('add');
			const { id } = action;
			const { products } = state;
			const index = products.findIndex(product => product.id === id);
			const product = {
				...products[index],
				num:products[index].num-1
			};
			return {
				products:[
					...products.slice(0,index),
					product,
					...products.slice(index)
				]
			}
			return state;
		default:
			return state;
	}
}
