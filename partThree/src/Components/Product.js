import React,{ Component } from 'react';


export default class Product extends Component{
	render(){
		const { name, price, num, addToCart, id } = this.props;
		return (
			<div className="product">
				{name}
				{' - $'}
				{price}
				{' num: '}
				{num}
				<button onClick={addToCart.bind(null,id)}>Add to cart</button>
			</div>
		);
	}
}
