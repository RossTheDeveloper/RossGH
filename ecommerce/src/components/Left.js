import React, { Component } from 'react';


class Left extends Component {
  constructor(props) {
    super(props);
    this.maleClick=this.maleClick.bind(this)
    this.femaleClick=this.femaleClick.bind(this)
    this.runClick=this.runClick.bind(this)
    this.casualClick=this.casualClick.bind(this)
    this.colorClick=this.colorClick.bind(this)
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

  colorClick(e){
    e.preventDefault();
    this.props.color(e.target.alt)
  }



render() {

  return(
    <div className="left filters">
      <div className="xx">
        <div className="xx1"><div>GENDER</div></div>
        <div className="xx2">
        <a href="#malek" onClick={this.maleClick} alt="yt">Male</a>
        <a href="#" onClick={this.femaleClick}>Female</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1"><div>TYPE</div></div>
        <div className="xx2">
        <a href="#" onClick={this.runClick}>Running</a>
        <a href="#" onClick={this.casualClick}>Casual</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1"><div>COLOR</div></div>
        <div className="xx3">
        <a onClick={this.colorClick} href="#"><img src={window.location.origin + '/colors/red.png'} alt="red" /></a>
        <a onClick={this.colorClick} href="#"><img src={window.location.origin + '/colors/blue.png'} alt="blue" /></a>
        <a onClick={this.colorClick} href="#"><img src={window.location.origin + '/colors/green.png'} alt="green" /></a>
        <a onClick={this.colorClick} href="#"><img src={window.location.origin + '/colors/white.png'} alt="white" /></a>
        <a onClick={this.colorClick} href="#"><img src={window.location.origin + '/colors/black.png'} alt="black" /></a>
        <a onClick={this.colorClick} href="#"><img src={window.location.origin + '/colors/orange.png'} alt="orange" /></a>


        </div>
      </div>
    </div>
  )
  }

}

export default Left;
