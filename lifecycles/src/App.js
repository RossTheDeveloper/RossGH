import React, { Component } from 'react'
import loggify from './loggify'

class App extends Component {

 static displayName = "WrappedComp"

  render() {
    console.log(this.state)
    return (
      <div>
        Hello
      </div>
    )
  }
}

App = loggify(App)

export default App
