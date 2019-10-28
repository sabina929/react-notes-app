import React, { Component } from 'react'

class NoteInput extends Component {

  render() {
    const {changeInput, handleSubmit, note, title, makeBold, makeItalic, makeUnderlined, bold, italic, underline} = this.props;

    return (
      <div className="form">
		  <form onSubmit={handleSubmit}>
              <div className="decorate">
                  <button type="button" onClick={makeBold}>B</button>
                  <button type="button" onClick={makeItalic}>I</button>
                  <button type="button" onClick={makeUnderlined}>U</button>
              </div>
             <input type="text" name="title" value={title} onChange={changeInput} required placeholder="Title"/>
		    <textarea name="note" value={note} onChange={changeInput} required placeholder="Notes" className={`${bold} ${italic} ${underline}`}></textarea>	
            <div className="submit">
                  <button type="submit">Add Your Note</button>	
              </div>
			
		  </form>
			</div>
    )
  }
}

export default NoteInput
