import React, { useState } from 'react'

function Todo() {
    const [data,setData]=useState('')
    const [arr,setArr]=useState([])
    const [editing,setEditing]=useState(false)
    const [editId,setEditId]=useState(null)

    const addTodo=()=>{
        if(editing){
            setArr(arr.map((value)=>
                value.id===editId? {...value,title:data} : value
            ))
            setEditing(false)
            setEditId(null)
        }else{
            setArr([...arr,{id:Date.now(),title:data}])
        }
        setData('')

    }
    const delTodo=(id)=>{
        setArr(
            arr.filter((value)=>{
                if(value.id===id){
                    value=null
                }
                return value
            })
        )
    }
    const editTodo=(id)=>{
       const editData= arr.find((value)=>value.id===id);
       setData(editData.title);
       setEditing(true)
       setEditId(id);
    }
  return (
    <div>
      <input onChange={(e)=>setData(e.target.value)} value={data} type="text" />
      <button onClick={addTodo}>Save</button>

      {arr.map((value)=>{
        return <>
        <h1>{value.title}</h1>
        <button onClick={()=>delTodo(value.id)}>Del</button>
        <button onClick={()=>editTodo(value.id)}>Edit</button></>
        

      })}
    </div>
  )
}

export default Todo
