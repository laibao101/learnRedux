import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CartList from '../Components/CartList';
import CartItem from '../Components/CartItem';
import * as actionCreators from '../Actions';
import { bindActionCreators } from 'redux';
class CartContainer extends Component{
	render(){
		const { carts, checkout } = this.props;
		return (
			<CartList name="Your Cart" checkout={checkout}>
				{carts.length === 0 ? <h4>Please add some products to cart.</h4> : carts.map(cart => <CartItem key={cart.id} {...cart} ></CartItem>)}
			</CartList>
		);
	}
}


const mapStateToProps = state => ({
  carts: state.carts
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)
