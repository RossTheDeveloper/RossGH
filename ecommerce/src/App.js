import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import nike from './images/n1.png'

let Header = (props) => {
  return (
    <div className="Header-fix">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome </h1>
      </header>
    </div>
  )
}


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

let Painter = (props) => {
    let text = props.text.toLowerCase()
    let products = props.products
    let selectValue = props.dropDown
    const Prods = [];

    if(selectValue === "ASC"){
    products.sort((a,b) => (a.price) - (b.price))
    console.log(products)}

    if(selectValue === "DESC"){
    products.sort((a,b) => (b.price) - (a.price))
    console.log(products)}



    products.forEach((each) => {

     if(each.name.toLowerCase().indexOf(text) === -1){
       return;}

      Prods.push(
        <Product
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

class Filter extends Component {
  constructor(props){
    super(props);
    this.change=this.change.bind(this)
  }

change(e){
 this.props.selectChange(e.target.value)
}

render(){
  return(
    <select onChange={this.change}

    name="SelectFilter">
    <option value="">- select -</option>
      <option value="ASC">Low to High</option>
      <option value="DESC">High to Low</option>

    </select>
  )
}

}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select:''
    };

    this.handleChange=this.handleChange.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
  }



handleChange(e){
  this.setState({
    value: e
  })
}

handleSelect(e){
  this.setState({
    select:e
  })
}

  render() {
    return (
      <div className="App">
        <Header />
        <Search
          filterChange={this.handleChange}
          value={this.state.value} />
        <Filter
        selectChange={this.handleSelect} />
        <Painter
          products={this.props.products}
          text={this.state.value}
          dropDown ={this.state.select}
          />
        </div>

    );
  }
}

export default App;
