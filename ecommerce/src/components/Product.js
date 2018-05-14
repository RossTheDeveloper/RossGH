import React, { Component } from 'react';



// fix naming !!!!!


class Product extends Component {
  constructor(props) {
    super(props);
    this.modal=this.modal.bind(this);

  }



  modal(img){
    document.getElementById("modal-container").style.display="flex"
    document.getElementById("modal-img" ).setAttribute('src', img)

  }


  render(){

    const product = this.props.product.name
    const price = this.props.product.price
    const gender = this.props.product.gender
    const img = this.props.product.img
    const view = this.props.product.view

    return(
      <div className="Product-Wrap"
       onMouseEnter={() => this.props.mouseOver(this.props.product)}
       onMouseLeave={() => this.props.mouseOut(this.props.product)}>
        <div className="Product-Image">
          <img src={window.location.origin + `${img}`} alt="img test" width="170" height="170" />
          <div className={view}
          onClick= {() => this.modal(img)} >
          Quick View
          </div>
        </div>
        <div className="Product-Desc">
          <div className="Product-name">
            {product}
          </div>
          <div className="Product-gender">
            {gender}
          </div>
          <div className="Product-price">
            $ {price}
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
