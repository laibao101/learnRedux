import React,{ Component } from 'react';
import Product from './Product';

export default class ProductItem extends Component{
	render(){
		return (
			<div className="product-item">
				<Product {...this.props}></Product>
			</div>
		);
	}
}
