import React, { Component } from 'react';





class Product extends Component {




  modal = (img,e) => {
    e.preventDefault()
    this.props.modal()
    this.props.modalPhoto(this.props.product.img)


  }


  render(){
    const product = this.props.product
    const {name, price, gender, img, view} = product;


    return(
      <div
       onMouseEnter={() => this.props.mouseOver(product)}
       onMouseLeave={() => this.props.mouseOut(product)}>
        <div className="Product-Image">
          <img src={window.location.origin + `${img}`} alt="img test" width="170" height="170" />
          <div className={view}
          onClick= {(e) => this.modal(img,e)} >
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
