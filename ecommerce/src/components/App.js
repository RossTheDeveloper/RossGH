import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Main from './Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './Contact';
import About from './About';

// review main component stucture
//site wireframe
// when we pass down state , maybe we should pass down all of it for painter
// <img src={window.location.origin + '/images/v4b.png'} height="300" width="300" alt="footerPhoto" />


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
      <Router>
        <div className="App">
          <Nav
            filterChange={this.handleChange}
            value={this.state.value}
            />

          <div className="space"> </div>



            <Switch>
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About}/>
              <Route exact path="/" render={(props) => (
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
              )} />
            </Switch>







          <div className="footer">
            <div className="fup">
              <div className="f1">
                <div className="f2">
                  <a href="#"> About </a>
                  <a href="#"> Contact </a>
                  <a href="#"> Careers </a>
                </div>
                <div className="f2">
                  <a href="#"> Find Store </a>
                  <a href="#"> Returns </a>
                  <a href="#"> Help </a>
                </div>
              </div>
              <div className="fz" >
                <a href="#"> Instagram </a>
                <a href="#"> Facebook </a>
                <a href="#"> Twitter </a>
                <a href="#"> Youtube </a>
              </div>
            </div>

            <div className="fbottom">
              <hr />
              <div className="fb1">
                <a href="#"> xxx </a>
                <a href="#"> yyy </a>
                <a href="#"> zzz </a>
              </div>
            </div>

          </div>

        </div>
      </Router>

    );
  }
}

export default App;
