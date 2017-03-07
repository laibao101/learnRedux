import React,{ Component } from 'react';
import CartItem from './CartItem';


export default class Cart extends Component{
  render(){
    const { cartItems } = this.props;
    const total = 0;
    const cartList = cartItems.map((item,i) => {
      return (
        <div key={i}>
            <CartItem {...item}></CartItem>
            { 'x' }
        </div>
      );
    });

    return (
      <div className="cart">
        {cartList.length == 0 ? 'Please add some products to cart.' : cartList}
        <p>
          {'Total:$'}{total}
        </p>
        <button>Checkout</button>
      </div>
    );
  }
}
