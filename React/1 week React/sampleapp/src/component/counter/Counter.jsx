import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const addNumber=()=>{
        setCount(count+1)
    }
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={addNumber}>Add</button>
    </div>
  )
}

export default Counter
