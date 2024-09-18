import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoteContext } from '../Usecontext';

function Home() {
    const nav=useNavigate();
    const navdetail=useNavigate();
    const {note}=useContext(NoteContext)
  return (
    <div>
     <button onClick={()=>nav('/create')}>Create Blogs</button>

     {note.map((value)=>{
        return <>
        <h1 onClick={()=>nav(`/details/${value.id}`)}>{value.title}</h1>
        <h3>{value.content}</h3>
  
        </>

        

     })}
    </div>
  )
}

export default Home
