import React,{ Component } from 'react';

export default class CartItem extends Component{
	render(){
		const { name, price, num } = this.props;
		return (
			<div className="cart-item">
				{name}
				{' - $'}
				{price}
				{' x '}
				{num}
			</div>
		);
	}
}
