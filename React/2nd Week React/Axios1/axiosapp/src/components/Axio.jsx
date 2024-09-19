import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axio() {
    const [data,setData]=useState('')
    const [arrTodo,setArrTodo]=useState([])
        
        useEffect(()=>{
            axios.get('http://localhost:3001/todos')
            .then(response=>setArrTodo(response.data))
            .catch(error=>console.log(error))
        },[]);
        
        const saveTodo=()=>{
            axios.post('http://localhost:3001/todos')
            .then(()=>setArrTodo[...arrTodo,])
        }

  
  return (
    <div>
        <input onChange={(e)=>setData(e.target.value)} type="text" />
        <button onClick={saveTodo}>Save</button>

        {arrTodo.map((value)=>{
            return <>
            <h1>{value.id}</h1>
            <h1>{value.title}</h1></>
        })}
    </div>
  )
}

export default Axio
