import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/notes/noteContext";
import Addnote from "./Addnote";
import Noteitem from "./Noteitem";
import {useNavigate} from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote} = context;
  let navigate = useNavigate();
  const[note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
  useEffect(() => {
    
        getAllNotes();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNote =(currentnote)=>{
    ref.current.click()
    setNote({id : currentnote._id , etitle : currentnote.title, edescription : currentnote.description, etag : currentnote.tag})
   
  }
  const ref = useRef(null)
  const refClose = useRef(null)

  const handleClick = (e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Updated successfully","success");
    
}

const onChange =(e)=>{
    setNote({...note,[e.target.name]:e.target.value})

}

  return (
    <>
      <Addnote showAlert={props.showAlert}/>

      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Form for updating a note */}

            <div className="modal-body">
            <form className="my-3">
        <div className="mb-3">
          <label htmlFor="etitle" className="form-label">
            Enter Title
          </label>
          <input
            type="text"
            className="form-control"
            id="etitle"
            name="etitle"
            value={note.etitle}
            minLength={5}
            required
            onChange={onChange}
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="edescription" className="form-label">
            Enter Description
          </label>
          <input
            type="text"
            className="form-control"
            id="edescription"
            name="edescription"
            value={note.edescription}
            minLength={5}
            required
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="etag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="etag"
            name="etag"
            value={note.etag}
            onChange={onChange}
          />
        </div>
        </form>
            
            </div>


            <div className="modal-footer">
              <button
                type="button"
                ref={refClose} 
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="my-3 row">
        <h2>Your Notes</h2>
        <div className="container mx-2">
            {notes.length===0 && "No Notes to display"}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />;
        })}
      </div>
    </>
  );
};

export default Notes;
