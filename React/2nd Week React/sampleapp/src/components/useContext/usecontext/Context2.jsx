import React, { useContext } from 'react'
import { userContext } from './Context1'

function Context2() {
    const {counter,setCounter,arr}=useContext(userContext)
  return (
    <div>
        <h1>Context2 Counter: {counter}</h1>
        <button onClick={()=>setCounter((counter)=>counter+1)}>Click Counter</button>
        <h1>{arr}</h1>
    </div>
  )
}

export default Context2
