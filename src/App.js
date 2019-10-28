import React, { Component } from 'react';
import NoteInput from "./components/NoteInput"
import NoteList from "./components/NoteList"

class App extends Component {

  state={
    notes: [],
    id: Math.random(),
    note: "",
    title: "",
    edit: false,
    bold: '',
    italic: '',
    underline: ''
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  handleSubmit = e => {
    e.preventDefault();

    const {title} = this.state;
    // console.log(title)
    const titleArr = title.toLowerCase().split(" ");
    const firstLetter = titleArr[0].charAt(0).toUpperCase();
    const firstWord = titleArr[0].replace(titleArr[0].charAt(0), firstLetter);
    titleArr[0] = firstWord;

    const newNote = {
      id: this.state.id,
      note: this.state.note,
      title: titleArr.join(' ')

    }
    const updatedNotes = [...this.state.notes, newNote]


    if (!this.state.edit) {
      this.setState(() => {
        return {
          notes: updatedNotes,
          id: Math.random(),
          note: "",
          title: ""
        }
      }
      )
    }


    if (this.state.edit) {
      const tempNotes = [...this.state.notes];
      const selectedNote = this.state.notes.find(note => note.id === this.state.id);
      console.log(selectedNote)
      const index = tempNotes.indexOf(selectedNote);
      const note = tempNotes[index];

      note.note = this.state.note;
      note.title = this.state.title;

      const editedNotes = [...tempNotes, note];
      editedNotes.splice(-1, 1);

      this.setState(() => {
        return {
          notes: editedNotes,
          id: Math.random(),
          note: "",
          title: "",
          edit: false
        }
      }
      )
    }


  }

  editNote = (id) => {
    const selectedNote = this.state.notes.find(note => note.id === id);

    this.setState(() => {
      return {
        id,
        note: selectedNote.note,
        title: selectedNote.title,
        edit: true
      }
    }, () => {
      console.log(this.state)
    })
  }


  makeBold =() => {

    if (this.state.bold === '') {
      this.setState(() => {
        return {
          bold: 'bold'
        }
      }, () => {
        // console.log('clicked', this.state)
      }
      )
    }
    if (this.state.bold === 'bold') {

      this.setState(() => {
        return {
          bold: ''
        }
      }, () => {
        // console.log('clicked', this.state)
      }
      )
    }
  }

  makeItalic =() => {
    if (this.state.italic === '') {
      this.setState(() => {
        return {
          italic: 'italic'
        }
      }, () => {
        // console.log('clicked', this.state)
      }
      )
    }
    if (this.state.italic === 'italic') {

      this.setState(() => {
        return {
          italic: ''
        }
      }, () => {
        // console.log('clicked', this.state)
      }
      )
    }

  }

  makeUnderlined =() => {
    if (this.state.underline === '') {

      this.setState(() => {
        return {
          underline: 'underline'
        }
      }, () => {
        // console.log('clicked', this.state)
      }
      )
    }
    if (this.state.underline === 'underline') {

      this.setState(() => {
        return {
          underline: ''
        }
      }, () => {
        // console.log('clicked', this.state)
      }
      )
    }
  }


  // componentDidUpdate() {
  //   console.log(this.state.notes)
  // }

  render() {
    return (
      <div className="container">
		<NoteInput changeInput={this.changeInput} handleSubmit={this.handleSubmit} note={this.state.note} title={this.state.title} makeBold={this.makeBold} makeItalic={this.makeItalic} makeUnderlined={this.makeUnderlined} bold={this.state.bold} italic={this.state.italic} underline={this.state.underline}/>
		<NoteList notes={this.state.notes} editNote={this.editNote}/>
	    </div>
    )

  }
}


export default App;
