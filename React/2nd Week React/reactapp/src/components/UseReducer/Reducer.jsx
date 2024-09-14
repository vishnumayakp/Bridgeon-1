import React, { useReducer } from 'react'

const initalState={count:0}

function changeValue(state,action){
    switch (action.type) {
        case 'increment': 
            return {
               count:state.count+1
            }

        case 'decrement': 
            return {
                count:state.count-1
            }
        case 'green': 
            return {
                color:action.payload
            } 

        case 'Red': 
            return {
                color:action.payload
            }
    
        default:
           return state
    }
}
function Reducer() {
    const [state,dispatch]=useReducer(changeValue,initalState)
  return (
    <div style={{backgroundColor:state.color}}>
        
        <button onClick={()=>dispatch({type:'increment'})}>+</button>
        <button onClick={()=>dispatch({type:'green',payload:'green'})}>green</button>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'decrement'})}>-</button>
        <button onClick={()=>dispatch({type:'Red',payload:'red'})}>Red</button>


    </div>
  )
}

export default Reducer
