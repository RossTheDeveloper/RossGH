import React, { Component } from 'react'
import {Markup, Editor, Container, Column, Row, RuleInput, RuleLabel, StyleInput, Button, Document} from './styled'
import hljs from 'highlight.js'
import {rando, getRandomPoem} from './utils'


// // console.log(rando.max)
// console.log(rando.color())

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

  get rules() {
     let {rules} = this.state
     let array = []
     let fields = ['name', 'begin', 'end']
     for (let i = 0; i < rules; i++) {
       array.push(
         <Row
           key={i}
         >
           <Column>
             {fields.map( (field, index) => {
               return (
                 <Column
                   key={index}
                 >
                   <RuleLabel>
                     {field}
                   </RuleLabel>
                   <RuleInput
                     value={this.state[`${field}${i}`]}
                     onChange={this.handleChange}
                     name={`${field}${i}`}
                   />
                 </Column>
               )
             })}
           </Column>
           <StyleInput
             value={this.state[`style${i}`]}
             onChange={this.handleChange}
             name={`style${i}`}
           />
         </Row>
       )
     }

     return array
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

//using the hl librarby , it has a function that allows us to pass in a string
//and it will turn that into html Markup
  convertToMarkup = (text="") => {
    return {
      __html: hljs.highlightAuto(text).value
    }
  }

// 3 functions for highlight.js
language = (newRules) => {
    return () => ({
      contains: [
        ...newRules
      ]
    })
  }

  registerLanguage = (state) => {
    let {rules} = state
    let ruleObjects = []
    for (let i = 0; i < rules; i++) {
      let newRule = {
        className: state[`name${i}`],
        begin: state[`begin${i}`],
        end: state[`end${i}`]
      }
      let {className, begin, end} = newRule
      if (
        className.length > 1 &&
        begin.length > 1 &&
        end.length > 1
      ) {
        begin = new RegExp(begin)
        end = new RegExp(end)
        ruleObjects.push(newRule)
      }
    }
    hljs.registerLanguage('language', this.language(ruleObjects))
    hljs.configure({
      languages: ['language']
    })
  }

  componentWillUpdate(nextProps, nextState) {
    this.registerLanguage(nextState)
  }

//pushes css as prop
  prepareStyles = () => {
      let {rules} = this.state
      let styles = []
      for (let i = 0; i < rules; i++) {
        styles.push(`
          .hljs-${this.state['name' + i]} {
            ${this.state['style' + i]}
          }
        `)
      }

      let newStyles = "".concat(styles).replace(",", "")

      return newStyles
    }

    getRandomText = async () => {
      try {
        let poem = await getRandomPoem()
        this.handleChange({
          target: {
            name: 'editor',
            value: poem
          }
        })
      } catch (error) {
        console.log("getRandomPoem error", error)
      }
    }

// want to hold the value of editor in state, since its textarea
  render() {
    //using destructoring
    let {editor} = this.state
    let {handleChange, newFields, rules, convertToMarkup, prepareStyles,
    getRandomText} = this
    return (
      <Container>
        <Column>
          {rules}
          <Button
          onClick= {newFields}>
            New Rule
          </Button>
        </Column>
        <Column>
          <Button
            onClick={getRandomText}>
            Random Text
          </Button>
          <Document>

            <Editor
            name={"editor"}
            value={editor}
            onChange={handleChange}
            />
            <Markup
             customStyles={prepareStyles()}
             dangerouslySetInnerHTML={convertToMarkup(editor)}
            />
          </Document>
        </Column>
      </Container>
    )
  }
}

export default App
