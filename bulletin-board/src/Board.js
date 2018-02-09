import React, {Component} from 'react'
import  Note from './Note'
import FaPlus from 'react-icons/lib/fa/plus'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      notes: []
    }

// {id:0,note:"call lisa"},{id:1,note:"Email John"}

      this.add=this.add.bind(this)
      this.eachNote=this.eachNote.bind(this)
      this.update=this.update.bind(this)
      this.remove=this.remove.bind(this)
      this.nextID=this.nextID.bind(this)
  }

//fire right before render
componentWillMount(){
    // var self = this
    if(this.props.count){
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
      .then(response => response.json())
      .then(json => json[0]
                  .split('. ')
                  .forEach(sentence => this.add(sentence.substring(0,25))))
    }
}

  add(text){
    this.setState(prevState =>({
      notes: [
      ...prevState.notes,
      {
        id: this.nextID(),
       note: text}
     ]

    }))

  }


  nextID(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
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
    <Note key={note.id}
          index={note.id}
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
      <button onClick={this.add.bind(null, "new note")}
        id="add">
        <FaPlus />
      </button>
        {this.state.notes.map(this.eachNote)}
      </div>



    )
  }
}

export default Board
