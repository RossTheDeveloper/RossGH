import React, { Component } from 'react';
import Product from './Product';


class Products extends Component{


  renderProducts = () => {

    return this.props.products.map((each) => (
      <Product
      product={each}
      key={each.id}
      mouseOver={this.props.mouseOver}
      mouseOut={this.props.mouseOut}
      modal={() => this.props.modal(true)}
      modalPhoto={(e) => this.props.modalPhoto(e)}
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
