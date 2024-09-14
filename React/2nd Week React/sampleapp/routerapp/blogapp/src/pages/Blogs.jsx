import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogContext } from '../Usecontext';

function Blogs() {
    const nav=useNavigate();
    const navdetail=useNavigate();
    const {blog}=useContext(BlogContext)
  return (
    <div>
     <button>Blogs</button>
     <button onClick={()=>nav('/create')}>Create Blogs</button>
     <button onClick={()=>navdetail('/details')}>Blog details</button>

     {blog.map((value)=>{
        return <h1 onClick={()=>nav(`/details/${value.id}`)}>{value.title}</h1>
        

     })}
    </div>
  )
}

export default Blogs
