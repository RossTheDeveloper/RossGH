import React, { Component } from 'react';
import logo from './logo.svg';







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
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input className="SearchForm" type="text" name="search" placeholder="Search..." value={this.props.value}
          onChange={this.change} />
        </form>
      </header>
    </div>

  )
}
}


export default Header;
