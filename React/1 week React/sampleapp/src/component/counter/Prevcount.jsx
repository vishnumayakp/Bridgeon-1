import React, { useState } from 'react'

function Prevcount() {
    const [count,setCount]=useState(0)
    const addNum=()=>{
        setCount(prevCount=> (prevCount+1))
    }
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={addNum}>Increment</button>
    </div>
  )
}

export default Prevcount
