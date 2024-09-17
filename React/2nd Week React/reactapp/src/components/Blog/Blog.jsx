import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Blogcontext } from '../Contexts/Usecontext'

function Blog() {
    const {data}=useContext(Blogcontext)
    const navigate=useNavigate()
    console.log(data);
    
  return (
    <div>
      <button onClick={()=>navigate('/create')}>Create Blog</button>
    
      {data.map((value)=>{
        return <h1 onClick={()=>navigate(`/details/${value.id}`)}>{value.title}</h1>
      })}
    </div>
  )
}

export default Blog
