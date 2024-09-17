import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Myblog} from '../Contexts/context'

function Createblog() {
    const nav=useNavigate()
    const [title,setTitle]=useState('')
    const [blog,setBlog]=useState('')
    const {addMyBlog}=useContext(Myblog)
    const writeBlog=()=>{
      addMyBlog({title,blog,id:Date.now()})
      nav('/')
    }
  return (
    <div> 
      <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Write Title' />
      <input onChange={(e)=>setBlog(e.target.value)} type="text" placeholder='Write Blogs' />
      <button onClick={writeBlog}>Save Blog</button>
    </div>
  )
}

export default Createblog
