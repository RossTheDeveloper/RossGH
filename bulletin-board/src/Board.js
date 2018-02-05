import React, {Component} from 'react'
import  Note from './Note'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      notes: [{id:33,note:"call lisa"},{id:34,note:"Email John"}] }
      this.eachNote=this.eachNote.bind(this)
  }
// here note is each object and Note is comp, i is just index
eachNote(note,i){
  return (
    <Note key={i} index={i}>
        {note.note}
    </Note>
  )
}

  render(){
    return (
      <div className='board'>
      //for each object in state run the eachNote method on it
      //which will return a note comp with key index attr and .note value
      //adding more objects to state will create new notes thanks to map on arrays
        {this.state.notes.map(this.eachNote)}
      </div>



    )
  }
}

export default Board
