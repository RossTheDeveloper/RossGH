import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './linkers'
import Contact from './Contact'
import App2 from './Apper'


    // <Route path=“/contact” component={Contact}/>






class App extends Component {
  constructor(props) {
   super(props);
   this.state ={
     name: "tommy"
   }
 }


  render() {
    return (
      <Router>
      <div>
      <Navigation />

      <Switch>
      <Route path="/about" component={App2}/>
      <Route path="/" render={(props) => (
             <Contact namer={this.state.name} />
           )} />



      </Switch>
      </div>

      </Router>
    )


  }
}

export default App;
