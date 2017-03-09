import React,{ Component } from 'react';
import ProductsList from '../Components/ProductsList';
import ProductItem from '../Components/ProductItem';
import { connect } from 'react-redux';
import * as actionCreators from '../Actions';
import { bindActionCreators } from 'redux';

class ProductsContainer extends Component{
	render(){
		const { products, addToCart } = this.props;
		console.log('product render');
		return (
			<ProductsList name="Products">
				{products.map(product =><ProductItem key={product.id} {...product} addToCart={addToCart}></ProductItem>)}
			</ProductsList>
		);
	}
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)
