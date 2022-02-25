import React,{useState} from 'react';
import  Inputarea  from './Inputarea';
import ToDoItems from './ToDoItems';
import './style.css';

function App() {
  const [items, setitems] = useState([]);
   const additems =(inputvalue)=>{
     
     setitems(prev=>[...prev,inputvalue])
   }
   console.log(items);
const deleteitems = (id)=>{
setitems((prev)=>{
  return prev.filter((item,index)=>{
    return index!==id;
  })
})
  }
  return (
    <div className='container'>
      <h1>To-DO List</h1>
      <Inputarea onadd={additems}/>
      {items.map((item,index)=>(
        <ToDoItems  key={index} id={index} text={item} onChecked={deleteitems}/>))}
    </div>
  );
}
export default App;
