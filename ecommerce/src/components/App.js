import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import {FaClose, FaCcVisa, FaCcAmex, FaCcMastercard, FaCcPaypal, FaHome, FaPlus, FaInstagram, FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare, FaShoppingCart } from 'react-icons/lib/fa'

// review main component stucture
//site wireframe
// when we pass down state , maybe we should pass down all of it for painter
// <img src={window.location.origin + '/images/v4b.png'} height="300" width="300" alt="footerPhoto" />


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select:'',
      gender:'',
      style:'',
      color:'',
      products:[
        {name:"a",id:0,view:"view-2",price:50,color:"x",variety:"casual",gender:"female",arrived:"2015-03-27",img:"/images/n1.png"},
        {name:"b",id:1,view:"view-2",price:70,color:"x",variety:"casual",gender:"male",arrived:"2015-03-29",img:"/images/n2.png"},
        {name:"c",id:2,view:"view-2",price:95,color:"x",variety:"casual",gender:"female",arrived:"2018-03-29",img:"/images/n3.png"},
        {name:"d",id:3,view:"view-2",price:10,color:"x",variety:"casual",gender:"male",arrived:"2018-03-27",img:"/images/n4.png"},
        {name:"e",id:4,view:"view-2",price:90,color:"x",variety:"casual",gender:"female",arrived:"2018-03-25",img:"/images/n5.png"},
        {name:"f",id:5,view:"view-2",price:80,color:"red",variety:"running",gender:"male",arrived:"2017-03-28",img:"/images/n6.png"},
        {name:"g",id:6,view:"view-2",price:40,color:"red",variety:"running",gender:"female",arrived:"2017-03-25",img:"/images/n7.png"},
        {name:"h",id:7,view:"view-2",price:53,color:"x",variety:"running",gender:"male",arrived:"2017-03-24",img:"/images/n8.png"},
        {name:"i",id:8,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v1.png"},
        {name:"j",id:9,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v2.png"},
        {name:"k",id:10,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v3.png"},
        {name:"l",id:11,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v4.png"},
        {name:"zd",id:12,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v5.png"},
        {name:"m",id:13,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v6.png"},
        {name:"n",id:14,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v7.png"},
        {name:"o",id:15,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v8.png"},
        {name:"p",id:16,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v9.png"},
        {name:"q",id:17,view:"view-2",price:99,color:"red",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v10.png"},
        {name:"r",id:18,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v11.png"},
        {name:"s",id:19,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v12.png"},
        {name:"t",id:20,view:"view-2",price:99,color:"black",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v13.png"},
        {name:"u",id:21,view:"view-2",price:99,color:"black",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v14.png"},
        {name:"v",id:22,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v15.png"},
        {name:"w",id:23,view:"view-2",price:99,color:"white",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v16.png"},
        {name:"x",id:24,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v17.png"},
        {name:"y",id:25,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v18.png"},
        {name:"z",id:26,view:"view-2",price:99,color:"blue",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v19.png"},
        {name:"za",id:27,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v20.png"},
        {name:"zb",id:28,view:"view-2",price:99,color:"orange",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v21.png"},
        {name:"zc",id:29,view:"view-2",price:99,color:"green",variety:"running",gender:"female",arrived:"2017-03-23",img:"/images/v22.png"}
      ]
};

    this.handleChange=this.handleChange.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
    this.genderClick=this.genderClick.bind(this)
    this.styleClick=this.styleClick.bind(this)
    this.colorClick=this.colorClick.bind(this)
    this.viewOver=this.viewOver.bind(this)
    this.viewOut=this.viewOut.bind(this)
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

  genderClick(e){
    this.setState({
      gender: e
    })
  }

  styleClick(e){
    this.setState({
      style: e
    })
  }

  colorClick(e){
    this.setState({
      color: e
    })
  }

  viewOver(product){
    let products = this.state.products;
    products[product.id].view = 'view-1';

    this.setState({
      products,
    });
  }

  viewOut(product){
    let products = this.state.products;
    products[product.id].view = 'view-2';

    this.setState({
      products,
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="modal-container">
            <div className="modal">
              <img id="modal-img" src="/images/n5.png" alt="img" />
              <div className="modal-close"
                onClick={() => document.getElementById("modal-container").style.display="none"}>
                <FaClose />
              </div>
            </div>
          </div>

          <Nav
            filterChange={this.handleChange}
            value={this.state.value}
            />

          <div className="space"> </div>



            <Switch>
              <Route path="/contact" component={Contact}/>
              <Route path="/about/:filter" component={About}/>
              <Route exact path="/" render={(props) => (
                <Main
                  selectChange={this.handleSelect}
                  products={this.state.products}
                  text={this.state.value}
                  dropDown ={this.state.select}
                  gender = {this.state.gender}
                  genderUp={this.genderClick}
                  style={this.state.style}
                  styleUp={this.styleClick}
                  colorClick={this.colorClick}
                  color={this.state.color}
                  mouseOver={this.viewOver}
                  mouseOut={this.viewOut}

                  />
              )} />
            </Switch>







          <div className="footer">
            <div className="fup">
              <div className="f1">
                <div className="f2">
                  <a href="#"> About </a>
                  <a href="#"> Contact </a>
                  <a href="#"> Careers </a>
                </div>
                <div className="f2">
                  <a href="#"> Find Store </a>
                  <a href="#"> Returns </a>
                  <a href="#"> Help </a>
                </div>
              </div>
              <div className="fz" >
                <a href="#"> <FaInstagram /> </a>
                <a href="#"> <FaFacebookSquare /> </a>
                <a href="#"> <FaTwitterSquare /> </a>
                <a href="#"> <FaYoutubeSquare /> </a>
              </div>
            </div>

            <div className="fbottom">
              <hr />
              <div className="fb1">
                <a href="#"> <FaCcVisa /> </a>
                <a href="#"> <FaCcAmex /> </a>
                <a href="#"> <FaCcMastercard /> </a>
                <a href="#"> < FaCcPaypal /> </a>
              </div>
            </div>

          </div>

        </div>
      </Router>

    );
  }
}

export default App;
