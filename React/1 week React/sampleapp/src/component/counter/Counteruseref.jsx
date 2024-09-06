import React, { useRef } from 'react'

function Counteruseref() {
    const incrCount=useRef(0)
    const addNum=()=>{
        incrCount.current+=1
        console.log(incrCount.current)
    }
  return (
    <div>
      <h1>Counter with useRef:{incrCount.current} </h1>
      <button onClick={addNum}>Add</button>
    </div>
  )
}

export default Counteruseref
