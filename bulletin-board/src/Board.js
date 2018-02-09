import React, {Component} from 'react'
import  Note from './Note'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [{id:0,note:"call lisa"},{id:1,note:"Email John"}] }
      this.eachNote=this.eachNote.bind(this)
      this.update=this.update.bind(this)
      this.remove=this.remove.bind(this)
  }

//will capture the user text in note comp
  update(newText,i){
    console.log('updating item at index', i, newText)
    //updatong state using callback funct
    //for each item in the notes array we will peform check
    //{..note} this passes in all the keys of the note object for the new object
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i) ? note : {...note, note: newText}
      )
    }))
  }

  remove(id){
    console.log('removing item at ', id)
    this.setState(prevState => ({
      notes:prevState.notes.filter(note => note.id !== id)
    }))
  }


// here note is each object and Note is comp, i is just index
eachNote(note,i){
  return (
    <Note key={i}
          index={i}
          onChange={this.update}
          onRemove ={this.remove} >
        {note.note}
    </Note>
  )
}

//for each object in state run the eachNote method on it
//which will return a note comp with key index attr and .note value
//adding more objects to state will create new notes thanks to map on arrays

  render(){
    return (
      <div className='board'>

        {this.state.notes.map(this.eachNote)}
      </div>



    )
  }
}

export default Board
