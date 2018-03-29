import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Product from './Product';
import Select from './Select';




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

    if(selectValue === "Alphabetical"){
    products.sort(function(a, b){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
    })
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

    return (
        <div className="Grid">
          {Prods}
        </div>
      )
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
        <Header
          filterChange={this.handleChange}
          value={this.state.value} />

          <div className="space"> </div>


        <div className="content">
            <div className="filters">
              <div className="gender"> q </div>
              <div className="gender"> q </div>
              <div className="gender"> q </div>
            </div>
            <div className="right">
              <div className="rightTop">
                <Select
                selectChange={this.handleSelect} />
              </div>
              <Painter
                products={this.props.products}
                text={this.state.value}
                dropDown ={this.state.select}
            />
            </div>
        </div>

        <div className="footer"> footer
          <img src={window.location.origin + '/images/n1.png'} className="App-logo" alt="logo" />
          </div>

      </div>


    );
  }
}

export default App;
