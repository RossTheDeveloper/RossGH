import React, { Component } from 'react';


class Left extends Component {


  filterClick = (e) => {
    e.preventDefault();
    this.props.filterUp(e)
  }



render() {

  return(
    <div className="left filters">
      <div className={(this.props.gender)?"yy":"xx"}>
        <div className="xx1"><div>GENDER</div></div>
        <div className="xx2">
        <a href="#malek" data-filter="gender" data-type="male"  onClick={this.filterClick} >Male</a>
        <a href="#" data-filter="gender" data-type="female" onClick={this.filterClick}>Female</a>
        </div>
      </div>

      <div className={(this.props.style)?"yy":"xx"}>
        <div className="xx1"><div>STYLE</div></div>
        <div className="xx2">
        <a href="#" data-filter="style" data-type="running" onClick={this.filterClick}>Running</a>
        <a href="#" data-filter="style" data-type="casual" onClick={this.filterClick}>Casual</a>
        </div>
      </div>

      <div className={(this.props.color)?"yy":"xx"}>
        <div className="xx1"><div>COLOR</div></div>
        <div className="xx3">
        <a onClick={this.filterClick}  data-filter="color" data-type="red" href="#"><img data-filter="color" src={window.location.origin + '/colors/red.png'} data-type="red" /></a>
        <a onClick={this.filterClick}  data-filter="color" data-type="blue" href="#"><img data-filter="color" src={window.location.origin + '/colors/blue.png'} data-type="blue" /></a>
        <a onClick={this.filterClick}  data-filter="color" data-type="green"href="#"><img data-filter="color" src={window.location.origin + '/colors/green.png'} data-type="green" /></a>
        <a onClick={this.filterClick}  data-filter="color" data-type="white"href="#"><img data-filter="color" src={window.location.origin + '/colors/white.png'} data-type="white" /></a>
        <a onClick={this.filterClick}  data-filter="color" data-type="black"href="#"><img data-filter="color" src={window.location.origin + '/colors/black.png'} data-type="black" /></a>
        <a onClick={this.filterClick}  data-filter="color" data-type="orange"href="#"><img data-filter="color" src={window.location.origin + '/colors/orange.png'} data-type="orange" /></a>


        </div>
      </div>
    </div>
  )
  }

}

export default Left;
