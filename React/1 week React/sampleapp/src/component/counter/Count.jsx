import React, { useState } from 'react'

function Count() {
    const [count,setCount]=useState(0)
   const addNum=()=>{
    setCount(count+1)
   }
  return (
    <div style={{width:'500px',heigth:'500px',backgroundColor:count%2===0? 'red':'green'}}>
      <h1>Counter:{count}</h1>
      <button onClick={addNum}>+</button>
    </div>
  )
}

export default Count
