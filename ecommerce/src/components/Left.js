import React, { Component } from 'react';


class Left extends Component {
  constructor(props) {
    super(props);
    this.maleClick=this.maleClick.bind(this)
    this.femaleClick=this.femaleClick.bind(this)
    this.runClick=this.runClick.bind(this)
    this.casualClick=this.casualClick.bind(this)
  }

  maleClick(e){
    e.preventDefault();
    this.props.sex("male")
  }

  femaleClick(e){
    e.preventDefault();
    this.props.sex("female")
  }

  runClick(e){
    e.preventDefault();
    this.props.variety("running")
  }

  casualClick(e){
    e.preventDefault();
    this.props.variety("casual")
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
        <a href="#" onClick={this.runClick}>Running</a>
        <a href="#" onClick={this.casualClick}>Casual</a>
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
