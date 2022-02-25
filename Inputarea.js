import React from 'react';
import {useState} from 'react'
import './style.css';
 function Inputarea (props) {
     const [inputtext, setinputtext] = useState('');
     const handlechange = (event)=>{    
         const newvalue=event.target.value;
         setinputtext(newvalue);
     }
  return <div>
      <form>
          <input type='text'onChange={handlechange} value={inputtext} />
          <button onClick={(e)=>{
              e.preventDefault();
              props.onadd(inputtext);
              setinputtext("");
         }} ><span>Add</span></button>
      </form>
  </div>;
};
export default Inputarea;