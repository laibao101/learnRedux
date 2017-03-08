import React,{ Component } from 'react';


export default class ProductsList extends Component{
	render(){
		const { children, name } = this.props;
		return (
			<div className="product-list">
				<h3>{title}</h3>
				<div>{children}</div>
			</div>
		);
	}
}
