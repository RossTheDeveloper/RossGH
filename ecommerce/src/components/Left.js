import React, { Component } from 'react';


class Left extends Component {
  constructor(props) {
    super(props);
    this.maleClick=this.maleClick.bind(this)
    this.femaleClick=this.femaleClick.bind(this)
  }

  maleClick(e){
    e.preventDefault();
    this.props.male("male")
  }

  femaleClick(e){
    e.preventDefault();
    this.props.male("female")
  }


render() {

  return(
    <div className="left filters">
      <div className="xx">
        <div className="xx1">GENDER</div>
        <div className="xx2">
        <a href="#malek" onClick={this.maleClick}>Male</a>
        <a href="#" onClick={this.femaleClick}>Female</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1">TYPE</div>
        <div className="xx2">
        <a href="#">Running</a>
        <a href="#">Casual</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1">COLOR</div>
        <div className="xx2">
        <a href="#">Male</a>
        <a href="#">Female</a>
        </div>
      </div>
    </div>
  )
  }

}

export default Left;
