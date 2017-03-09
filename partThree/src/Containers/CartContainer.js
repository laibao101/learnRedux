import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CartList from '../Components/CartList';
import CartItem from '../Components/CartItem';
class CartContainer extends Component{
	render(){
		const { carts } = this.props;
		return (
			<CartList name="Your Cart">
				{carts.map(cart => <CartItem key={cart.id} {...cart} ></CartItem>)}
			</CartList>
		);
	}
}
