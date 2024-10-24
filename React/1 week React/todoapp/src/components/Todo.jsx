import React from 'react'
import './Todo.css'
import { useState } from 'react';
// import { Button } from 'react-bootstrap';

function Todo() {
    const [toDos,setTodos]=useState([])
    const [toDo,setTodo]=useState('') 
    const [editId,setEditId]=useState(null)

    function handleAddOrUpdate(){
      if(editId){
        setTodos(
          toDos.map((obj)=>
            obj.id===editId? {...obj,text:toDo}:obj
          )
        );
        setEditId(null)
      }else{
        setTodos([...toDos,{id: Date.now(),text: toDo, status:false}])
      }
      setTodo('')
    }

      const handleEdit=(id)=>{
        const todoEdit=toDos.find((obj)=> obj.id===id)
        if(todoEdit){
          setTodo(todoEdit.text)
          setEditId(id)
        }
      }

      const handleDelete=(id)=>{
        setTodos(toDos.filter((obj)=>obj.id!==id))
      }
    
    return (
        <div className="app">
          <div className="mainHeading">
            <h1>ToDo List❗</h1>
          </div>
          <div className="input">
            <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
            <button onClick={handleAddOrUpdate} className='btn'>Add</button>
          </div>
          <div className="todos">     
            {toDos.map((obj)=>{
                return (
                    <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.checked);
                    console.log(obj);
                    setTodos(toDos.filter(obj2=>{
                        if(obj2.id===obj.id){
                            obj.status=e.target.checked
                        }
                        return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  
                </div>
                <p>{obj.text}</p>
                  <div className='buttons'>
                    <button onClick={()=>handleDelete(obj.id)} className='btn1'>Del</button>
                    <button onClick={()=>handleEdit(obj.id)} className='btn2'>Edit</button>
                  </div>
              </div>
                )
            })}

            {toDos.map((obj)=>{
                if(obj.status){
                    return <h4>{obj.text}</h4>
                }
                return null
            })}
          </div>
        </div>
      );
}

export default Todo
