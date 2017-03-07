import React,{ Component } from 'react';

export default class ProductItem extends Component{
  render(){
    const { name, price } = this.props;
    return (
      <div className="product-item">
        <span className="item-name">{name}</span>
        {' - $'}
        <span className="item-price">{price}</span>
      </div>
    );
  }
}
