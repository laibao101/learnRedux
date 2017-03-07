import React, { Component } from 'react';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import { connect } from 'react-redux';
import * as ActionCreators from '../Actions/ActionCreator'
import './style.css';


class ShoppingCart extends Component {
    render() {
        return (
            <div className="shop-cart">
              <Header></Header>
              <Products {...this.props}></Products>
              <Cart {...this.props}></Cart>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        products:state.products,
        cartItems:state.cartItems
    }
}

const App = connect(mapStateToProps,ActionCreators)(ShoppingCart);

export default App;
