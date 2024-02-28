import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  const navigate=useNavigate();
  function clickHandler(){
    
    navigate("/support");

  }
  return (
    <div>
      
     This is about
    
     <div>
       <button onClick={clickHandler}>Move to support</button>
     </div>
     </div>
  )
}

export default About
