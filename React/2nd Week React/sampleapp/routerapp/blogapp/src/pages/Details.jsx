import React, { useContext } from 'react'
import { NoteContext } from '../Usecontext'
import { useParams } from 'react-router-dom'

function Details() {
    const {note}=useContext(NoteContext)
    const {id}=useParams();
    console.log(id);
    const data=note.filter((value)=>{
      if(value.id==id){
        return data
      }
    })
    
  return (
    <div>
      {data.map((value)=>{
        
            return <>
            <h2>{value.title}</h2>
            <p>{value.body}</p>
        </>
       
      })}
    </div>
  )
}

export default Details
