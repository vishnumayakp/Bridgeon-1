import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogContext, BlogProvider } from '../Usecontext';

function Create() {
    const [title,setTitle]=useState('')
    const [blog, setBlog]=useState('')
    const navigate=useNavigate();
    const {addBlog}=useContext(BlogContext)

    const addBlogItem=()=>{
        addBlog(title,blog)
        navigate('/')
    }
  return (
    <div>
      <input onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder='Enter Title'/>
      <input onChange={(e)=>setBlog(e.target.value)} type="text" placeholder='Type your blog' />
      <button onClick={addBlogItem}>Save Blog</button>
    </div>
  )
}

export default Create
