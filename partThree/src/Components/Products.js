import React,{ Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component{
  render(){
    const { products, addToCart } = this.props;
    const productsList = products.map((product) => {
        console.log(23351513);
        const id = product.id;
          return (
            <div key={id}>
              <ProductItem {...product} ></ProductItem>
              <button onClick={addToCart.bind(null,id)}>Add to cart</button>
            </div>
          );
    });

    return (
      <div className="products">
        <h3>Products</h3>
        {productsList}
      </div>
    );
  }
}

export default Products;
