import React, {useContext, useState} from "react";
import noteContext from '../Context/notes/noteContext'


const Addnote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const[note,setNote] = useState({title:"",description:"",tag:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})
        props.showAlert("Added successfully","success")
    }

    const onChange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value})

    }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>

      <form className="my-3" onSubmit={handleClick}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            minLength={5}
            required
            value={note.title}
            onChange={onChange}
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Enter Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            minLength={5}
            required
            value={note.description}
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            minLength={3}
            required
            value={note.tag}
            onChange={onChange}
          />
        </div>
       
       
         <button type="submit" className="btn btn-primary" > 
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addnote;
