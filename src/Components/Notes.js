import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext'
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <div className='my-3 row'>
      <h2>Your Notes</h2>
      {notes.map((note)=>{
        return <Noteitem note={note}/>
      })}
    </div>
  )
}

export default Notes
