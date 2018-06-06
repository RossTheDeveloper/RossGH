import React, { Component } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';


class Products extends Component{


  renderProducts = () => {



    return this.props.products.map((each) => (
      <Link key={each.id} className="Product-Wrap" to={`/product/${each.id}`}>
      <Product
      product={each}
      mouseOver={this.props.mouseOver}
      mouseOut={this.props.mouseOut}
      modal={() => this.props.modal(true)}
      modalPhoto={(e) => this.props.modalPhoto(e)}
      />
      </Link>
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
