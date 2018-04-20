import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';

// review main component stucture
//learning action creators, thunks

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select:'',
      gender:'male'
    };

    this.handleChange=this.handleChange.bind(this)
    this.handleSelect=this.handleSelect.bind(this)
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
