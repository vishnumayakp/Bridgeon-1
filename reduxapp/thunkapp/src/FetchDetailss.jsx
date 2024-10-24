import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchComments } from './commentSlice'

function FetchDetailss() {
    const dispatch=useDispatch()
    const {comments,loading,error} = useSelector((state)=>state.comments) 

    useEffect(()=>{
        dispatch(fetchComments());

    },[dispatch])

    if(loading){
        return <h1>Loading</h1>
    }
    if(error){
        return <h1>Error: {error}</h1>
    }
  return (
    <div>
      {comments.map((value)=>{
       return (
        <li key={value.id}>
        <b>{value.email}</b>:{value.body}
    </li>
       )
      })}
    </div>
  )
}

export default FetchDetailss
