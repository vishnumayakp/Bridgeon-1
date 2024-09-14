import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { deleteData, getData, patchData, postData, putData } from '../../Api/connections';


function Server() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const[data,setData]=useState({})
    useEffect(()=>{
        getData("1")
    .then(response=>setData(response.data))
    },[])

    function addDataSet(e){
         e.preventDefault()
         postData({name,email,password})
    }

    function editData(e){
        e.preventDefault()
        const data={name,email,password}
        putData('1',data)
        .then(res=>console.log(res.data))
    }

    function patchingData(){
        const data={name}
        patchData('1',data)
        .then((res)=>setData(res.data))
    }

    function delData(){
        deleteData('1')
        .then(()=>setData(null))
    }

  return (
    <div>
     
        <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter Name' /> <br />
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='enter email' /> <br />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='enter password' /><br />
        <button onClick={addDataSet}>Post</button>
        <button onClick={editData}>Put</button>
        <button onClick={patchingData}>Patch</button>
        <button onClick={delData}>Delete</button>
      <h1>{data.name}</h1>
    
    </div>
  )
}

export default Server
