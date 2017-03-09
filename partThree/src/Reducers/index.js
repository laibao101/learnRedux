import * as ActionTypes from '../ActionTypes';


export default function rootReducer (state={},action) {
	switch (action.type) {
		case ActionTypes.ADD_TO_CART:
			const { id } = action;
			const { products } = state;
			const index = products.findIndex(product => product.id === id);
			const product = products.find(product => product.id === id);
			const newProducts = [...products];
			newProducts[index] = excProducts(product,action);
			return {
				products:newProducts
			}
		default:
			return state;
	}
}


const excProducts = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        num: state.num - 1
      }
    default:
      return state
  }
}
