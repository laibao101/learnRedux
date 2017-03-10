import * as ActionTypes from '../ActionTypes';


export default function rootReducer (state={},action) {
	switch (action.type) {
		case ActionTypes.ADD_TO_CART:
			const { id } = action;
			const { products, carts } = state;
			const index = products.findIndex(product => product.id === id);
			const product = products.find(product => product.id === id);
			const newProducts = [...products];
			newProducts[index] = {
				...product,
				num:product.num-1
			}
			const cartIndex = carts.findIndex(cart => cart.id == id);
			let newCarts = [...carts];
			if (cartIndex < 0) {
				newCarts.push({
					...product,
					num:1
				})
			} else {
				newCarts[cartIndex]={
					...newCarts[cartIndex],
					num:newCarts[cartIndex].num + 1
				}
			}
			return {
				products:newProducts,
				carts:newCarts
			}
		case ActionTypes.CHECKOUT:
			return {
				products:state.products,
				carts:[]
			}
		default:
			return state;
	}
}
