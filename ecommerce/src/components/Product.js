import React from 'react';

let Product = (props) => {
  const product = props.product.name
  const price = props.product.price
  let img = props.product.img

    return(
      <div className="Product-Wrap">
        <div className="Product-Image">
          <img src={img} alt="img test" width="170" height="170" />
        </div>
        <div className="Product-Desc">
          <div className="Product-name">
            {product}
          </div>
          <div className="Product-price">
            $ {price}
          </div>
        </div>
      </div>
    )
}

export default Product;
