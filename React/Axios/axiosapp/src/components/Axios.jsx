import React, { useState } from 'react'

function Axios() {
   
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errors,setError]=useState({})
    const [success,setSuccess]=useState('')
   
    function handleForm(e){
        e.preventDefault()
        const errors={};
        if(!name){
            errors.name="Username is Required*"
        }
        if(!email){
            errors.email="email is Required*"
        }
        if(!password){
            errors.password="Password is Required*"
        }
        setError(errors)
        if(Object.keys(errors).length===0){
            setSuccess("Login Successful")
            setName('')
            setEmail('')
            setPassword('')
        }
    }
  return (
    <div>
        <h1>{success}</h1>
        <form action="" onSubmit={handleForm}>
        <label htmlFor="">Name</label><br />
      <input onChange={(e)=>setName(e.target.value)} type="text" /> <br />
      <p>{errors.name}</p>
      <label htmlFor="">Email</label><br />
      <input onChange={(e)=>setEmail(e.target.value)} type="text" /><br />
      <p>{errors.email}</p>
      <label htmlFor="">Password</label><br />
      <input onChange={(e)=>setPassword(e.target.value)} type="password" /> <br />
      <p>{errors.password}</p>
      <button>Submit</button>
        </form>
    </div>
  )
}

export default Axios
