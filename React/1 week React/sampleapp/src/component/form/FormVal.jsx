import React, { useState } from 'react'

function FormVal() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState({})
    const [success,setSuccess]=useState('')
    
    const handleForm=(e)=>{
        e.preventDefault()
        const errors={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
       if(!name){
        errors.name="Name is Required"
       } 
       if(!email){
        errors.email="email is Required"
       }else if(!regex.test(email)){
            errors.email="Enter Valid Email"
       }
       if(!password){
        errors.password="Password is Required"
       }else if(password.length<4){
        errors.password="enter minimum 4 character"
       }
       setError(errors)
       if(Object.keys(errors).length===0){
        setSuccess("Successful")
        setEmail('')
        setName('')
        setPassword('')
       }
       
    }
    
  return (
    <div>
        <h1>{success}</h1>
      <form onSubmit={handleForm}>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter name'/>
        <p>{error.name}</p>
        <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="text" placeholder='Enter email'/>
        <p>{error.email}</p>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter password'/>
        <p>{error.password}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormVal
