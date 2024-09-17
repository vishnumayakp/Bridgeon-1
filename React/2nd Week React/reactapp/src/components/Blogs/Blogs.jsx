import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Myblog } from '../Contexts/context'

function Blogs() {
  const {data}=useContext(Myblog)
    const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/create')}>Create Blogs</button>
      {data.map((value)=>{
        return <h1 onClick={()=>navigate(`/blogdetails/${value.id}`)}>{value.title}</h1>
      })}

    </div>
  )
}

export default Blogs
