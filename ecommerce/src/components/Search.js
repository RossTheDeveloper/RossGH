import React, { Component } from 'react';


class Search extends Component {

  handleChange = (e) => {
    (this.props.change(this.search.value))
  }


  render(){
    return(
    <div className="searchForm0">
    <form className="SearchForm">
      <input  ref={input => this.search = input} type="search" name="search" placeholder="Search Product..." value={this.props.value}
      onChange={this.handleChange} />
    </form>
    </div>
    )
  }
}


export default Search;
