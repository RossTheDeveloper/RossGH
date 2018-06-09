import React, { Component } from 'react';





class ProductBar extends Component {

  state={cart:[]}

addToCart = () => {
  const product = this.props.product
  const finishedProduct = {
    ...product,
    size: this.refs.size.value,
    qty: this.refs.qty.value
  }

this.setState((prevState)=>{
  return{
    cart:[ ...prevState.cart, finishedProduct]
  }
})

console.log(this.state.cart)


}





  render(){
    const product = this.props.product
    const {name, price, gender, img, view, id} = product;
    const cartProducts = this.state.cart.map((each)=> {

      return <div key={each.id} className="cartProductwrap">
              <div className="cpLeft">
              <img src={window.location.origin + `${each.img}`} height="100" width="100" />
              </div>

              <div className="cpRight">

              <div className="cartNP">
              <h4>{`${each.name} -${each.gender}`}</h4>
              <h4>${each.price * each.qty}.00</h4>
              </div>

              <h4>{`color -${each.color}`}</h4>
              <h4>{`size -${each.size}`}</h4>
              <h4>{`QTY -${each.qty} @ $${each.price}.00`}</h4>

              <div className="cartEdit">
                <div className="removeProdCart">
                  <button type="button"> Remove </button>
                </div>

              </div>

              </div>

             </div>
    })



    return(
      <div>
      <div className="Bar-Wrap">
        <div className="Bar-left bar">
          <img className="Bar-Image" src={window.location.origin + `${img}`} alt="img test" width="350" height="350" />
        </div>
        <div className="Bar-right bar">

          <div className="B-top">
            <h1>{name} -{gender}</h1>
            <h3>Price: ${price}.00</h3>
          </div>

          <div className="B-bottom">

              <div>
              <label htmlFor="size"> <strong> Size: </strong> </label>
              <select ref="size" name="size" onChange={()=>console.log(this.refs.size.value)}>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select></div>

            <div>
            <label htmlFor="qty"> <strong> QTY: </strong> </label>
            <select ref="qty" name="qty" onChange={()=>console.log(this.refs.qty.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select></div>

              <div> <button type="button" onClick={this.addToCart}> ADD TO CART </button> </div>
          </div>

          </div>
      </div>


      <div className="cs-wrap">

        <div className="cs-left">
        <h2> Your Cart {`(${this.state.cart.length})`}</h2>
        <hr />
        {cartProducts}
        </div>

        <div className="cs-right">
        <h2>Summary</h2>
        <hr />

        <div className="Details">

        <div className="subtotal">
        {`SUBTOTAL $${this.state.cart.reduce((acc,each)=> {
          const x =each.price*each.qty
          return x + acc
        },0)}`}
        </div>

        <div className="tax">
        {`TAX`}
        </div>

        <div className="Total">
        {'TOTAL'}
        </div>

        <div className="Total">
        {`CHECKOUT`}
        </div>

        </div>

        </div>


      </div>




      </div>







    )
  }
}

export default ProductBar;
