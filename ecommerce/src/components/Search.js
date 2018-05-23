import React, { Component } from 'react';


class Search extends Component {

  handleChange = (e) => {
    (this.props.change(e.target.value))
  }


  render(){
    return(
    <div className="searchForm0">
    <form className="SearchForm">
      <input  type="search" name="search" placeholder="Search Product..." value={this.props.value}
      onChange={this.handleChange} />
    </form>
    </div>
    )
  }
}


export default Search;
