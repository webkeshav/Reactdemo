import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
    const host = "http://localhost:5000";
const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);


  //Get all notes
  const getAllNotes = async () =>{
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGFhODM3NzZmN2E0NzY5ZTEyYzAxIn0sImlhdCI6MTY1NjY3NTczM30.OSlEsdWRwk-5iji1uZcHIsnV7uqNfE8E1eF7wlNJtvg'
        }
      
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);

    }

  //Add a Note
  const addNote = async (title,description,tag) =>{
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGFhODM3NzZmN2E0NzY5ZTEyYzAxIn0sImlhdCI6MTY1NjY3NTczM30.OSlEsdWRwk-5iji1uZcHIsnV7uqNfE8E1eF7wlNJtvg'
        },
       
        body: JSON.stringify({title,description,tag})
      });
      const note = await response.json();
 
    setNotes(notes.concat(note))

  }

  // Delete a Note
  const deleteNote = async (id) =>{

    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGFhODM3NzZmN2E0NzY5ZTEyYzAxIn0sImlhdCI6MTY1NjY3NTczM30.OSlEsdWRwk-5iji1uZcHIsnV7uqNfE8E1eF7wlNJtvg'
        },
       
        body: JSON.stringify()
      });
      const json = await response.json();
      console.log(json);


    console.log("deleting the node with id" +id)
    const newNotes = notes.filter((note)=>{return note._id !== id})
    setNotes(newNotes);

}

  // Edit a Note

  const editNote = async (id, title, description, tag) =>{
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
         'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZGFhODM3NzZmN2E0NzY5ZTEyYzAxIn0sImlhdCI6MTY1NjY3NTczM30.OSlEsdWRwk-5iji1uZcHIsnV7uqNfE8E1eF7wlNJtvg'
        },
       
        body: JSON.stringify({title,description,tag})
      });
      const json = await response.json();
      console.log(json);
let newNotes = JSON.parse(JSON.stringify(notes))
     //Logic to edit in Client
    for(let index=0; index< newNotes.length; index++){
        const element = newNotes[index];
        if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
        }
    }
setNotes(newNotes);
}



return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;

