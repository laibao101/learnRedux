import React,{ Component } from 'react';
import ProductsList from '../Components/ProductsList';
import ProductItem from '../Components/ProductItem';



export default class ProductsList extends Component{
	render(){
		const { products } = this.props;
		return (
			<ProductsList>
				{products.map(product => {
					return <ProductItem {...product}></ProductItem>
				})}
			</ProductsList>
		);
	}
}
