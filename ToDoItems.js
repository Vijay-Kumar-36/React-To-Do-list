import React from 'react';
import './style.css';
 const ToDoItems = (props) => {
  return <div  >
  <li className='highlight'>{props.text}<img onClick={()=>props.onChecked(props.id)} src="https://img.icons8.com/color/30/000000/filled-trash.png"/></li>   
  </div>;
};
export default ToDoItems;