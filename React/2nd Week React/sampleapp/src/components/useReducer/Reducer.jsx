import React, { useReducer } from 'react'
import './Reducer.css'
import changeReducer from '../../reducers/changeReducer'

function Reducer() {
  const initialState={
    value:0
  }
  const [state, dispatch]=useReducer(changeReducer,initialState)
  return (
    <div className='main-div'>
      <div className='container' style={{backgroundColor:state.color}}>
       <button onClick={()=>{dispatch(
        {
          type:'change-value',
          payload:1
        }
       )}} className='btn1'>
        +</button>
       <button onClick={()=>{dispatch(
        {
          type:'change-color',
          payload:'blue'
        }
       )}} className='btn3'>blue</button>

       <h1>{state.value}</h1>

       <button onClick={()=>{dispatch(
        {
          type:'change-value',
          payload:-1
        }
       )}} className='btn2'>
        -</button>
       <button onClick={()=>{dispatch(
        {
          type:'change-color',
          payload:'yellow'
        }
       )}} className='btn4'>yellow</button>

      
      </div>
    </div>
  )
}

export default Reducer
