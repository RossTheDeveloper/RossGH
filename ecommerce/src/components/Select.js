import React, { Component } from 'react';

class Select extends Component {


change = (e) => {
 this.props.selectChange(e.target.value)
}

render(){
  return(

    <div>
    <label htmlFor="SelectFilter"> <strong> Sort By </strong> </label>
    <select className="Select" onChange={this.change}
    name="SelectFilter">
    <option value="">- select -</option>
      <option value="ASC">Price (Low to High)</option>
      <option value="DESC">Price (High to Low)</option>
      <option value="New Arrivals">New Arrivals</option>
      <option value="Alphabetical">Alphabetical</option>
      <option value="Top Sellers">Top Sellers</option>
    </select>
    </div>
  )
}

}

export default Select;
