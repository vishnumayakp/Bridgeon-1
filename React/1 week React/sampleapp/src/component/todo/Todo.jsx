import React, { useState } from 'react'

function Todo() {
    const [toDo,setTodo]=useState('')
    const [arrTodo,setArrTodo]=useState([])
    const addTodo=()=>{
        setArrTodo([...arrTodo,{id:Date.now(),title:toDo}])
        setTodo('')
    }
    const handleDel=(id)=>{
      setArrTodo(
        arrTodo.filter((value,index)=>{
          if(value.id===id){
            value=null
          }
          return value
        })
      )
    }
  return (
    <div>
      <input onChange={(e)=>setTodo(e.target.value)} type="text" value={toDo} />
      <button onClick={addTodo}>Add</button>
      {
        arrTodo.map((value)=>{
            return (
                <>
                <h1>{value.title}</h1>
                <button onClick={()=>handleDel(value.id)}>Del</button>
                </>
            )
        })
      }
     
    </div>
  )
}

export default Todo
