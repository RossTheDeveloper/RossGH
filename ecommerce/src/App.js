import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import nike from './images/n1.png'




let Prod = (props) => {
  const product = props.product.name
  let img = props.product.img
  console.log(img)
    return(
      <div className="Product-Wrap">
        <div className="Product-Image">
          <img src={img} alt="img test" width="170" height="170" />
        </div>
        {product}
      </div>
    )
}

let Painter = (props) => {

    const Prods = [];
    props.products.forEach((each) => {
      Prods.push(
        <Prod
        product={each}
        key={each.name}
        />
      );
    });

    return(
      <div className="Grid"> {Prods} </div>

    )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome </h1>
        </header>
        <p className="App-intro">
          rendering products
        </p>
        //product array here =)
        <Painter products={this.props.products}/>
        </div>

    );
  }
}

export default App;
