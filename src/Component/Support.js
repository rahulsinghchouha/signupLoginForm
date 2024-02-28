import React from 'react'
import { useNavigate } from 'react-router-dom';


const Support = () => {
  const navigate=useNavigate();
  function clickHandler(){
    
    navigate("/*");
  }
  function backHandler()
  {
    navigate(-1);
  }
  return (
    <div>
         
      This is support
      <div>
        <button onClick={clickHandler}>support to NotFound</button>
        <button onClick={backHandler}> Go Back</button>
      </div>
    </div>
  )
}
export default Support
