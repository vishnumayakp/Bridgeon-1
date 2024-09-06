import React, { useState } from 'react'

function Todo2() {
    const [text,setText]=useState('')
    const [arrTodo,setArrTodo]=useState([])
    
    const addTodo=()=>{
        setArrTodo([...arrTodo,{id:Date.now(),title:text}])
        setText('')
    }
    const delTodo=(id)=>{
        setArrTodo(
            arrTodo.filter((value)=>{
                if(value.id===id){
                    value=null
                }
                return value
            })
        )
        
    }
  return (
    <div>
      <input onChange={(e)=>setText(e.target.value)} value={text} type="text" />
      <button onClick={addTodo}>Add</button>

      {arrTodo.map((value)=>{
       return  <><h1>{value.title}</h1>
        <button onClick={()=>delTodo(value.id)}>Del</button></>
        
      })}
    </div>
  )
}

export default Todo2
