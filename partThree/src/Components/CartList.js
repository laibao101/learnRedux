import React,{ Component } from 'react';

export default class CartList extends Component{
	render(){
		const { name, children, checkout } = this.props;
		return (
			<div className="cart-list">
				<h3>{name}</h3>
				{children}
				<button onClick={checkout}>Check out</button>
			</div>
		);
	}
}
