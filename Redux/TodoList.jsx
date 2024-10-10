import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './todoReducer';


function TodoList() {
const[input,setInput]=useState('');
const todos = useSelector((state)=>state.todos.list);
const dispatch=useDispatch();
const [listId,setListId]=useState(null);
const [edited,setEdited]=useState('');
function handleAddList(){
    if(input){
        dispatch(addTodo(input))
        setInput('')
    }
}
function handleDelete(id){
    dispatch(deleteTodo(id))
}
function handleUpdate(id){
    setEdited(todos.text)
    setListId(id)
}
function handleSave(id){
    dispatch(updateTodo({id,newText:edited}))
    setListId(null)
}

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div  style={{marginBottom:"2rem"}}>
        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" />-
        <button onClick={handleAddList}>Add</button>
      </div>
      {
        todos.map((todo)=>{
            return(
                <div>
                    {listId === todo.id ?(
                       <div>
                            <input value={edited} onChange={(e)=>setEdited(e.target.value)} type="text" />
                            <button onClick={()=>handleSave(todo.id)}>Save</button>
                            <button onClick={()=>handleDelete(todo.id)}>Del</button>
                       </div>
                    ):(
                        <div>
                            <input value={todo.text} type="text" style={{backgroundColor:"white",border:"none"}} disabled />
                            <button onClick={()=>handleUpdate(todo.id)}>Edit</button>
                            <button onClick={()=>handleDelete(todo.id)}>Del</button>
                        </div>
                    )}
                    
                    
                </div>
            )
        })
      }
    </div>
  )
}

export default TodoList
