import React, { Component } from 'react';
import './App.css';
import Header from './header';


import Main from './Main';

// <div className="content">
//
//     <div className="left filters">
//       <div className="gender"> q </div>
//       <div className="gender"> q </div>
//       <div className="gender"> q </div>
//     </div>
//
//     <div className="right">
//       <div className="rightTop">
//
//         <Select
//         selectChange={this.handleSelect} />
//       </div>
//       <Painter
//         products={this.props.products}
//         text={this.state.value}
//         dropDown ={this.state.select}
//     />
//     </div>
// </div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      select:''
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
        <Header
          filterChange={this.handleChange}
          value={this.state.value}
          />
          
        <div className="space"> </div>

        <Main
          selectChange={this.handleSelect}
          products={this.props.products}
          text={this.state.value}
          dropDown ={this.state.select}
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
