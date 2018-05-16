import React, { Component } from 'react';



// fix naming !!!!!
// const name = product.name
// const price = product.price
// const gender = product.gender
// const img = product.img
// const view = product.view

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
    const product = this.props.product
    const {name, price, gender, img, view} = product;


    return(
      <div className="Product-Wrap"
       onMouseEnter={() => this.props.mouseOver(product)}
       onMouseLeave={() => this.props.mouseOut(product)}>
        <div className="Product-Image">
          <img src={window.location.origin + `${img}`} alt="img test" width="170" height="170" />
          <div className={view}
          onClick= {() => this.modal(img)} >
          Quick View
          </div>
        </div>
        <div className="Product-Desc">
          <div className="Product-name">
            {name}
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
