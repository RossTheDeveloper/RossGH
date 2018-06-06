import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import ProductPage from './ProductPage';
import {FaClose } from 'react-icons/lib/fa'

// review main component stucture
//site wireframe
// when we pass down state , maybe we should pass down all of it for painter
// <img src={window.location.origin + '/images/v4b.png'} height="300" width="300" alt="footerPhoto" />


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">


          <Nav />

          <div className="space"> </div>



            <Switch>
              <Route path="/contact" component={Contact}/>
              <Route path="/product/:filter" component={ProductPage}/>
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
