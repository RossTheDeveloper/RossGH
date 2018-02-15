import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'

class App extends Component {

state={
  editor: "",
  name0: "",
  begin0: "",
  end0: "",
  style0: "",
  rules: 1
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

  newFields = () => {
    this.setState( (prevState) => {
      let {rules} = prevState
      let fields = ['name', 'begin', 'end', 'style']
      let inputValues = {}
      fields.forEach( (field) => {
        inputValues = {
        ...inputValues,
          [`${field}${rules}`]: ""
          //the above line is a computed prop name
        }
      })
      rules++
      //set state function expects us to return an object to set state with key/val
      return {
        rules,
        ...inputValues
      }
    })
  }


// want to hold the value of editor in state, since its textarea
  render() {
    //using destructoring
    let {value} = this.state
    let {handleChange, newFields} = this
    return (
      <Container>
        <Column>
          <Button
          onClick= {newFields}>
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
