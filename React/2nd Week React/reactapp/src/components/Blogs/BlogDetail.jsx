import React, { useContext } from 'react'
import { Myblog } from '../Contexts/context'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const {data}=useContext(Myblog)
  const {id}=useParams()
  const result=data.filter((value)=>{
    if(value.id==id){
      return (value)
    }
  })
  console.log(result);
  

  return (
    <div>
      {
      result.map((value)=>{
        return <>
        <h1>{value.title}</h1>
        <h5>{value.blog}</h5>
        </>
      })}
    </div>
  )
}

export default BlogDetail
