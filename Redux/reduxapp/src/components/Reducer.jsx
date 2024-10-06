import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Reducer() {
    const value= useSelector((state)=>{
        console.log(state.value)
    })
    const dispatch=useDispatch()
    console.log(value);
    

  return (
    <div>
    <h1>Counter/Color</h1>
    <div  style={{width:'400px', height:'200px',display:'flex'}}>
    <div style={{width:'200px',justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', height:'200px',backgroundColor:'yellow'}}>
        <button onClick={()=>{
            dispatch({
                type:'increment'
            })
        }}>Increment</button>
        <h1>{value}</h1>
        <button onClick={()=>{
            dispatch({
                type:'decrement'
            })
        }}>Decrement</button>
    </div>
    <div style={{width:'200px', height:'200px',backgroundColor:'hotpink',display:'flex'}}>
        <button style={{width:'50%'}}>Green</button>
        <button style={{width:'50%'}}>Red</button>
    </div>
    </div>
    </div>
  )
}

export default Reducer
