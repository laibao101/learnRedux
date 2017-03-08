import React,{ Component } from 'react';


export default class ProductsList extends Component{
	render(){
		const { children, name } = this.props;
		return (
			<div className="product-list">
				<h3>{name}</h3>
				<div>{children}</div>
			</div>
		);
	}
}
