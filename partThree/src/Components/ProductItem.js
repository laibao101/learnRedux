import React,{ Component } from 'react';
import Product from './Product';

export default class ProductItem extends Component{
	render(){
		const { product } = this.props;
		return (
			<div className="product-item">
				<Product {...product}></Product>
			</div>
		);
	}
}
