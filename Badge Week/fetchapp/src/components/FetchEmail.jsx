import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchEmail() {
    const [email,setEmail]=useState([])
    const [showComment,setShowComment]=useState(null)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then((res)=>setEmail(res.data))
        .catch((error)=>console.log(`can't fetch data`,error))
    })

    function handleClick(id){
        if(setShowComment===id){
            setShowComment(null)
        }else{
            setShowComment(id)
        }
    }
  return (
    <div>
      {email.map((items)=>{
        return(
            <div key={items.id}>
                <div onClick={()=>handleClick(items.id)}>{items.email}</div>

                {showComment===items.id && (
                    <div>{items.body}</div>
                )}
            </div>
        )
      })}
    </div>
  )
}

export default FetchEmail

