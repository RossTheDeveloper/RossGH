import React, { Component } from 'react';
import Product from './Product';


class Products extends Component{

  renderProducts= () => {
    return this.props.products.map((each) => (
      <Product
      product={each}
      key={each.id}
      />
    ))
}

  render() {

    return(
    <div className="Grid">
    {this.renderProducts()}
    </div>
    )
  }
}


export default Products;
