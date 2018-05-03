import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';

// review main component stucture
//site wireframe
// when we pass down state , maybe we should pass down all of it for painter

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select:'',
      gender:'',
      variety:'',
      color:''
    };

    this.handleChange=this.handleChange.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
    this.genderClick=this.genderClick.bind(this)
    this.varietyClick=this.varietyClick.bind(this)
    this.colorClick=this.colorClick.bind(this)
  }

  handleChange(e){
    this.setState({
      value: e
    })
  }

  handleSelect(e){
    this.setState({
      select:e
    })
  }

  genderClick(e){
    this.setState({
      gender: e
    })
  }

  varietyClick(e){
    this.setState({
      variety: e
    })
  }

  colorClick(e){
    this.setState({
      color: e
    })
  }

  render() {
    return (
      <div className="App">
        <Nav
          filterChange={this.handleChange}
          value={this.state.value}
          />

        <div className="space"> </div>

        <Main
          selectChange={this.handleSelect}
          products={this.props.products}
          text={this.state.value}
          dropDown ={this.state.select}
          gender = {this.state.gender}
          sex={this.genderClick}
          category={this.state.variety}
          variety={this.varietyClick}
          colorClick={this.colorClick}
          color={this.state.color}

          />









        <div className="footer"> footer
          <img src={window.location.origin + '/images/n1.png'} className="App-logo" alt="logo" />
          <div> {new Date("2015-03-25").toString()} </div>
          </div>

      </div>


    );
  }
}

export default App;
