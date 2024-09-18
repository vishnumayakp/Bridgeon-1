import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoteContext } from '../Usecontext';

function Create() {
    const [title,setTitle]=useState('')
    const [content, setNotes]=useState('')
    const [color,setColor]=useState('red')
    const navigate=useNavigate();
    const {addNote}=useContext(NoteContext)

    const addNoteItem=()=>{
        addNote(title,content,color)
        navigate('/')
    }

    const changeColor=(e)=>{
      setColor(e.target.value)
    }
  return (
    <div>
      <input onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder='Enter Title'/>
      <input onChange={(e)=>setNotes(e.target.value)} type="text" placeholder='Type your Note' />
      <select onChange={changeColor} name="" id="">
        <option  value="red">red</option>
        <option   value="green">green</option>
        <option   value="blue">blue</option>
      </select>
      <button onClick={addNoteItem}>Save Blog</button>
    </div>
  )
}

export default Create
