
import React ,{useContext, useEffect} from 'react';
import noteContext from '../Context/notes/noteContext';

const About = () => {
  const a = useContext(noteContext)
  
  return (
    <div>
      <h1>this is about</h1>
    </div>
  )
}

export default About
