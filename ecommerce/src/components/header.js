import React, { Component } from 'react';
import logo from './logo.svg';
// import {Link} from 'react-router-dom'


    // <ul className="flexList">
    // <li><a href="/about" title="About">About</Link></li>
    // <li><a href="/#" title="item2">item 2</Link></li>
    // <li><a href="/#" title="item3">item 3</Link></li>
    // </ul>






class Header extends Component {
  constructor(props) {
    super(props);
    this.change=this.change.bind(this)
  }

change(e){
this.props.filterChange(e.target.value)
}

  render(){
  return(
    <div className="Header-fix">
      <header className="App-header">

    <ul className="flexList">
    <li><a href="/about" title="About">About</a></li>
    <li><a href="/#" title="item2">item 2</a></li>
    <li><a href="/#" title="item3">item 3</a></li>
    </ul>

    <img src={logo} className="App-logo" alt="logo"/>

        <form className="SearchForm">
          <input  type="search" name="search" placeholder="Search..." value={this.props.value}
          onChange={this.change} />
        </form>

      </header>
    </div>

  )
}
}


export default Header;
