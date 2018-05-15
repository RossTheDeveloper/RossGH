import React, { Component } from 'react';


class Left extends Component {
  constructor(props) {
    super(props);
    this.genderClick=this.genderClick.bind(this)
    this.styleClick=this.styleClick.bind(this)
    this.colorClick=this.colorClick.bind(this)
  }

  genderClick(e){
    e.preventDefault();
    this.props.genderUp(e.target.name)
  }


  styleClick(e){
    e.preventDefault();
    this.props.styleUp(e.target.name)
    console.log(e.target.name)
  }


  colorClick(e){
    e.preventDefault();
    if (e.target.alt === undefined) {
      return;
    } else {
        this.props.color(e.target.alt)
    }

  }



render() {

  return(
    <div className="left filters">
      <div className="xx">
        <div className="xx1"><div>GENDER</div></div>
        <div className="xx2">
        <a href="#malek" name="male" onClick={this.genderClick} >Male</a>
        <a href="#" name="female" onClick={this.genderClick}>Female</a>
        </div>
      </div>

      <div className="xx">
        <div className="xx1"><div>STYLE</div></div>
        <div className="xx2">
        <a href="#" name="running" onClick={this.styleClick}>Running</a>
        <a href="#" name="casual" onClick={this.styleClick}>Casual</a>
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
