import React, { Component } from 'react';





class ProductBar extends Component {




  modal = (img) => {
    this.props.modal()
    this.props.modalPhoto(this.props.product.img)

  }


  render(){
    const product = this.props.product
    const {name, price, gender, img, view, id} = product;


    return(
      <div className="Bar-Wrap">
        <div className="Bar-left bar">
          <img className="Bar-Image" src={window.location.origin + `${img}`} alt="img test" width="350" height="350" />
        </div>
        <div className="Bar-right bar">

          <div className="B-top">
            <h2>{name} -{gender}</h2>
            <h3>Price: ${price}.00</h3>
          </div>

          <div className="B-bottom">
              <div> x </div>
              <div> y </div>
              <div> z </div>
          </div>

          </div>
      </div>
    )
  }
}

export default ProductBar;
