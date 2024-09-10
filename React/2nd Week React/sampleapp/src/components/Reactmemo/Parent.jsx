import React, { useMemo, useState } from 'react'
import Child from './Child'

function Parent() {
   
    console.log("Parent");
    const [count,setCount]=useState(0)
    const addCount=()=>{
        setCount(count+1)
    }
    const data=useMemo(()=>{
        return   {
          name:'abc',
         count:count
        }
      },[count])
  return (
    <div>
        <Child count={data}/>
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
    </div>
  )
}

export default Parent
