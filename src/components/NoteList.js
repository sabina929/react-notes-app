import React, { Component } from 'react'

class NoteList extends Component {

  render() {
    const {notes, editNote} = this.props;

    return (
      <div className="notelist">
          <div className="notes-wrapper">
{
      notes.map(note => {
        return (
          <div key={note.id} className="note" onClick={() => editNote(note.id)}>
              <h2>{note.title.slice(0, 7)}{note.title.length >= 10 ? "..." : null}
              </h2>
              <p>{note.note.slice(0, 45)}{note.note.length >= 48 ? "..." : null}
              </p>
          </div>
        )
      })
      }	
          </div>
			
	</div>

    )
  }
}

export default NoteList
