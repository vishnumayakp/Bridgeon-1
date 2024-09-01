import React,{useState} from 'react'


function Eventhandle() {
  const [count,setCount]=useState(0)
  const addValue=()=>{
    return setCount(count+5)
  }
  return (
    <div className='bg'>
      <button onClick={addValue}>Click Here</button>
    </div>
  )
}

export default Eventhandle
