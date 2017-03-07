

export default function rootReducer (state=[],action) {
	switch (action.type) {
		case 'ADD_TO_CART':
			console.log('add');
			const { id } = action;
			const { products, cartItems } = state;
			const index = products.findIndex((product) => product.id == id);
			const num = products[index].num - 1;
			const product = {
				...products[index],
				num:num
			}
			let flag = true;
			cartItems.forEach(item => {
				if (item.id === id) {
					flag = false;
				}
			});

			if (flag) {
				cartItems.push(products[index]);
			}else{

			}

			return {
				cartItems:cartItems,
				products:[
					...products.slice(0,index),
					product,
					...products.slice(index)
				]
			}
			console.log(index);
			return state;
		default:
			return state;
	}
}
