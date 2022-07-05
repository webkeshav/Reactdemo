import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) =>{
const notesInitial = [
    {
      "_id": "62bee97f1873aacb0a769d54",
      "user": "62bdaa83776f7a4769e12c01",
      "title": "my title new",
      "description": "Please wake up early 2",
      "tag": "personal",
      "date": "2022-07-01T12:33:03.304Z",
      "__v": 0
    },
    {
      "_id": "62beec2f675de54fed379a4d",
      "user": "62bdaa83776f7a4769e12c01",
      "title": "my title 3",
      "description": "kya karega uth ke jaldi",
      "tag": "personal",
      "date": "2022-07-01T12:44:31.833Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial);



return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;