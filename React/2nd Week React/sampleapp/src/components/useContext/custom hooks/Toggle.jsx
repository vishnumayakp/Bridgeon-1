import React, { useState } from 'react'


function useToggle(initialState=false){
    const[value,setValue]=useState(initialState);

    const toggleBtn=()=>{
        setValue(prev => !prev);
    };
    return [value,toggleBtn];

}

function Toggle() {
    const [isToggled,toggleBtn]=useToggle()
  return (
    <div>
      <p>{isToggled ? 'Toggle ON' : 'Toggle OFF'}</p>
      <button onClick={toggleBtn}>Toggle</button>
    </div>
  )
}

export default Toggle
