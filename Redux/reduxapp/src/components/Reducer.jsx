import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,green,red } from '../Redux/Store'

function Reducer() {
    const value= useSelector((state)=> state.value)
    const color=useSelector((sate)=>sate.color)
    const dispatch=useDispatch()

  return (
    <div>
    <div  style={{width:'400px', height:'200px',display:'flex'}}>
    <div style={{width:'200px',justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column', height:'200px', backgroundColor:color}}>
        <button onClick={()=>{
            dispatch(increment())
        }}>Increment</button>
        <h1>{value}</h1>
        <button onClick={()=>{
            dispatch(decrement())
        }}>Decrement</button>
    </div>
    <div style={{width:'200px', height:'200px',backgroundColor:'hotpink',display:'flex'}}>
        <button onClick={()=>{
            dispatch(green())
        }} style={{width:'50%'}}>Green</button>
        <button onClick={()=>{
            dispatch(red())
        }} style={{width:'50%'}}>Red</button>
    </div>
    </div>
    </div>
  )
}

export default Reducer
