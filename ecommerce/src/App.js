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
    let text = props.text

    const Prods = [];
    props.products.forEach((each) => {

     if(each.name.indexOf(text) === -1){
       return;}

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
//onchange needs to be placed here
class Search extends Component {
  constructor(props) {
    super(props);
    this.change=this.change.bind(this)
  }

change(e){
this.props.filterChange(e.target.value)
}

  render(){
  return(
    <form className="Search">
    <input className="searchForm" type="text" name="search" placeholder="Search..." value={this.props.value}
    onChange={this.change} />
    </form>
  )
}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange=this.handleChange.bind(this)
  }



handleChange(e){
  this.setState({
    value: e
  })
}

  render() {
    return (
      <div className="App">
      <div className="Header-fix">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome </h1>
        </header>
      </div>
        <Search
          filterChange={this.handleChange}
          value={this.state.value} />
        <p className="App-intro">
          rendering products
        </p>
        //product array here =)
        <Painter
          products={this.props.products}
          text={this.state.value}/>
        </div>

    );
  }
}

export default App;
