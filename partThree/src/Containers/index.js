import React,{ Component } from 'react';
import ProductsContainer from './ProductsContainer';



class App extends Component{
	render(){
		return (
			<div className="app">
				<h1 className="shop-cart">shopping cart</h1>
				<ProductsContainer></ProductsContainer>
			</div>
		);
	}
}

export default App;
