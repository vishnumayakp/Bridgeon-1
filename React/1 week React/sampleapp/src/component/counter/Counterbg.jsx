import React, { useState } from 'react'
import './Counter.css'


function Counterbg() {
    const [count,setCount]=useState(0)
    const addCount=()=>{
        setCount(count+1)       
    }
    const changeBg=()=>{
        return count%2===0? "lightblue":'hotpink'
    }
    
  return (
    <div className='main-Cont'>
        
      <div  className={count%2===0? 'even':'odd'}>
        <button onClick={addCount}>Add count</button>
        <h2>Count:{count}</h2>
      </div>
    </div>
  )
}

export default Counterbg
