import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addTodos ,delTodo, editTodo } from '../Todo Toolkit/toDoSlice'

function Todo() {
  const [data,setData]=useState('')
  const [editId,setEDitId]=useState(null)
  const [updateTodo,setUpdateTodo]=useState('')
  const todos=useSelector((state)=>state.todos.list)  
  const dispatch=useDispatch()
  console.log(todos);
  function addTodo(){
   dispatch(addTodos(data))
   setData('')
  } 

  function deleteTodo(id){
    dispatch(delTodo(id))
  }

  function editData(id,data){
    setEDitId(id)
    setUpdateTodo(data)
  }

  function handleSave(id){
    dispatch(editTodo({id,updateTodo}))
    setEDitId(null)
    setUpdateTodo('')
  }

  function handleCancel(data){
    setUpdateTodo(data)
    setEDitId(null)

  }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Todo List App</h1>
      <div style={{display:'flex', justifyContent:'center'}}>
        <input value={data} onChange={(e)=>setData(e.target.value)} type="text" />
        <button onClick={addTodo} style={{marginLeft:'20px'}}>Add</button>
      </div>
      {todos.map((value)=>{
        return(
        <div>
          {editId===value.id?(
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <input onChange={(e)=>setUpdateTodo(e.target.value)} type="text" value={updateTodo} style={{marginTop:'20px'}}/>
            <button onClick={()=>handleSave(value.id)} style={{marginLeft:'20px'}}>Save</button>
            <button onClick={handleCancel} style={{marginLeft:'10px'}}>Cancel</button>
          </div>
          ):(
            <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <input type="text" value={value.text} style={{border:'none',backgroundColor:'white',marginTop:'20px'}} disabled  />
            <button onClick={()=>deleteTodo(value.id)} style={{marginLeft:'20px'}}>Del</button>
            <button onClick={()=>editData(value.id,value.text)} style={{marginLeft:'10px'}}>Edit</button>
          </div>
          )}
        </div>

        )
      })}
    </div>
  )
}

export default Todo
