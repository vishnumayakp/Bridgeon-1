import React, { useReducer } from 'react'

const initialValue=false
function changeToggle(state,action){
    switch (action) {
        case false:
            return  state="OFF"

        case true:
            return state="ON"
                
            
    
        default:
           return state
    }
}

function ToggleRed() {
    const [state,dispatch]=useReducer(changeToggle,initialValue)

    function change(){
        if(state==="OFF"){
            dispatch(true)
            
        }else{
            dispatch(false)
        }
    }
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={change}>Toggle</button>
    </div>
  )
}

export default ToggleRed
