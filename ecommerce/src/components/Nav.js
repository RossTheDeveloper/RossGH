import React, { Component } from 'react';
import logo from "../jackal.png";
import Search from './Search'
import { Link } from 'react-router-dom';
import Suggestions from './Suggestions'
import {FaSearch } from 'react-icons/lib/fa'
// <img src={window.location.origin + `${img}`} alt="img test" width="170" height="170" />
// import {Link} from 'react-router-dom'


    // <ul className="flexList">
    // <li><a href="/about" title="About">About</Link></li>
    // <li><a href="/#" title="item2">item 2</Link></li>
    // <li><a href="/#" title="item3">item 3</Link></li>
    // </ul>

class Nav extends Component {

state={
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
  ],
  filtered:[],
  search:false
}

change = () => {
  if(this.search.value){
  const filt1 = this.state.products.filter((each)=>{
    return each.name.toLowerCase().indexOf(this.search.value.toLowerCase()) !== -1
  })

  this.setState({filtered:filt1.slice(0,3)})

} else if (!this.search.value) {
  this.setState({filtered:[]})
  console.log("emp")
}
}

searchClick = () => {
  this.setState((prevState) => ({search:!prevState.search}))
}

searchOff = () => {
  this.setState({search:false})
}

  render(){
  return(
    <div className="Header-fix">
      <header className="App-header">

    <ul className="flexList">
    <li><Link to="/">Home</Link></li>
    <li><Link to={`/product/1`}>temp</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>

    <img onClick={()=>this.search.focus()} src={logo} className="App-logo" alt="logo"/>

    <div className="temp">
      <FaSearch className="FaSearch"
        onClick={this.searchClick}/>
    </div>


      </header>
      {(this.state.search) && <div className="searchFix">
      <form >
          <input autoFocus className="mainSearch"
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.change}
          />
          <Suggestions results={this.state.filtered}
            off={this.searchOff}/>
      </form>
      </div>}
    </div>

  )
}
}


export default Nav;
