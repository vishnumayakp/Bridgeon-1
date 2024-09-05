import React from 'react'
import './Todo.css'
import { useState } from 'react';
// import { Button } from 'react-bootstrap';

function Todo() {
    const [toDos,setTodos]=useState([])
    const [toDo,setTodo]=useState('') 
    return (
        <div className="app">
          <div className="mainHeading">
            <h1>ToDo List❗</h1>
          </div>
          <div className="input">
            <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
            <button onClick={()=>setTodos([...toDos,{id: Date.now(),text: toDo, status:false}])} className='btn'>Add</button>
            {/* <Button size='sm'>Add</Button> */}
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
                  <p>{obj.text}</p>
                  <button className='btn1'>Del</button>
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
