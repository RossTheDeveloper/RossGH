import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'

class App extends Component {

state={
  editor: ""
}

  handleChange = (event) => {
    //name and value are both props of event.target
    //so name here is editor and value is whatevers in textarea
    let {name, value} = event.target
    // to pass in this new name variable value which is editor we must use []
    this.setState({
      [name]:value
    })

  }

// want to hold the value of editor in state, since its textarea
  render() {
    //using destructoring
    let {value} = this.state
    let {handleChange} = this
    return (
      <Container>
        <Column>
          <Button>
            New Rule
          </Button>
        </Column>
        <Column>
          <Button>
            Random Text
          </Button>
          <Document>

            <Editor
            name={"Editor"}
            value={value}
            onChange={handleChange}
            />
            <Markup/>
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App
