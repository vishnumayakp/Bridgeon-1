import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Blogcontext } from '../Contexts/Usecontext'

function Details() {
    const {id}=useParams()
    const {data} =useContext(Blogcontext)
    const blog=data.filter((value)=>{
        if(value.id==id){
           return(value)
        }
    })
    console.log(blog);
    
  return (
    <div>
    
       {
        blog.map((value)=>{
            return  <>
                
        <h1>{value.title}</h1>
        <h4>{value.content}</h4>
            </>
        })
       }
       
   
      
    </div>
  )
}

export default Details
