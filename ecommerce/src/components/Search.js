import React from 'react';


const Search = (props) =>

<form className="SearchForm">
  <input  type="search" name="search" placeholder="Search..." value={props.value}
  onChange={props.change} />
</form>



export default Search;
