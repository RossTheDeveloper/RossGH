import React, { Component } from 'react';
import {FaClose} from 'react-icons/lib/fa'


// filterClose = (img) => {
//   this.props.filterClose(false)
// }

// on span
//
// onClick={this.filterClose}

class Filters extends Component{



  remove = (e) => {
    e.preventDefault();
    this.props.remove(e)
  }


  renderFilters = () => {

    return this.props.filters.map((each, i) => (

        <div key={i}> {each} <a name={each} onClick={this.remove}> <FaClose /> </a> </div>



    ))
}

  render() {

    return(
    <div className="filtered">
    {this.renderFilters()}
    </div>
    )
  }
}


export default Filters;
