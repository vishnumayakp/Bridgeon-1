import React, { useContext } from 'react'
import { BlogContext } from '../Usecontext'
import { useParams } from 'react-router-dom'

function Details() {
    const {blog}=useContext(BlogContext)
    const {id}=useParams();
    console.log(id);
    const data=blog.filter((value)=>value.id==id)
    
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
