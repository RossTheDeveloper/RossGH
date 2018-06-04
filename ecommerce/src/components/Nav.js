import React, { Component } from 'react';
import logo from "../jackal.png";
import Search from './Search'
import { Link } from 'react-router-dom';
import Suggestions from './Suggestions'
// <img src={window.location.origin + `${img}`} alt="img test" width="170" height="170" />
// import {Link} from 'react-router-dom'


    // <ul className="flexList">
    // <li><a href="/about" title="About">About</Link></li>
    // <li><a href="/#" title="item2">item 2</Link></li>
    // <li><a href="/#" title="item3">item 3</Link></li>
    // </ul>

class Nav extends Component {

state={
  results:["aa","bb","cc","dd","ee"],
  filtered:[]
}

change = () => {
  if(this.search.value.length > 0){
  const filt1 = this.state.results.filter((each)=>{
    return each.toLowerCase().indexOf(this.search.value.toLowerCase()) !== -1
  })

  const filt2 = filt1.slice(0,3)

  this.setState({filtered:filt2})
  console.log(this.state.filtered)
} else if (!this.search.value) {
  this.setState({filtered:[]})
}

}

  render(){
  return(
    <div className="Header-fix">
      <header className="App-header">

    <ul className="flexList">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about/shoex">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>

    <img src={logo} className="App-logo" alt="logo"/>

    <div className="temp">

      <form>
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.change}
          />
          <Suggestions results={this.state.filtered} />
      </form>
    </div>


      </header>
    </div>

  )
}
}


export default Nav;
