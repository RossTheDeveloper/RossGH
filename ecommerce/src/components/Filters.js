import React, { Component } from 'react';
import {FaClose} from 'react-icons/lib/fa'


// filterClose = (img) => {
//   this.props.filterClose(false)
// }

// on span
//
// onClick={this.filterClose}

class Filters extends Component{




  renderFilters = () => {

    return this.props.filters.map((each, i) => (
      <div>
        <p key={i}> {each} <span onClick={()=>console.log("okeaaaa")}> <FaClose /> </span> </p>

      </div>

    ))
}

  render() {

    return(
    <div>
    {this.renderFilters()}
    </div>
    )
  }
}


export default Filters;
