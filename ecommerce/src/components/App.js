import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import {FaClose } from 'react-icons/lib/fa'

// review main component stucture
//site wireframe
// when we pass down state , maybe we should pass down all of it for painter
// <img src={window.location.origin + '/images/v4b.png'} height="300" width="300" alt="footerPhoto" />


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
};

    this.handleChange=this.handleChange.bind(this)

  }

  handleChange(e){
    this.setState({
      value: e
    })
  }



  render() {
    return (
      <Router>
        <div className="App">
          <div id="modal-container">
            <div className="modal">
              <img id="modal-img" src="/images/n5.png" alt="img" />
              <div className="modal-close"
                onClick={() => document.getElementById("modal-container").style.display="none"}>
                <FaClose />
              </div>
            </div>
          </div>

          <Nav
            filterChange={this.handleChange}
            value={this.state.value}
            />

          <div className="space"> </div>



            <Switch>
              <Route path="/contact" component={Contact}/>
              <Route path="/about/:filter" component={About}/>
              <Route exact path="/" render={(props) => (
                <Main />
              )} />
            </Switch>







            <Footer />

        </div>
      </Router>

    );
  }
}

export default App;
