import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





let Prod = (props) => {
  const product = props.product
    return(
      <div className="Product-Wrap">
        <div className="Product-Image">
          <img src={logo} alt="img test" width="42" height="42" />
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
        product={each.name}
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
