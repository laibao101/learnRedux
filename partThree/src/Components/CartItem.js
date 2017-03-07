import React,{ Component } from 'react';

export default class CartItem extends Component{
	render(){
		const { name, price, num } = this.props;
		return (
			<p>
				{name}
				{' - '}
				{price}
				{' x '}
				{num}
			</p>
		);
	}
}
