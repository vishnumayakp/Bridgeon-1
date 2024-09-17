import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Blogcontext } from '../Contexts/Usecontext'

function Create() {
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const nav=useNavigate()
    const {addBlog}=useContext(Blogcontext)
    const addData=()=>{
        addBlog({title,content,id:Date.now()})
        nav('/')
    }
  return (
    <div>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter Blog Title' />
        <input onChange={(e)=>setContent(e.target.value)} type="text" placeholder='Enter Your Blog' />
      <button onClick={addData}>Submit Blog</button>
    </div>
  )
}

export default Create
