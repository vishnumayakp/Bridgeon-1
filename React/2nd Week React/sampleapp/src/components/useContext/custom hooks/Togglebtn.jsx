import React, { useState } from 'react'


function useToggle(){
const [toggle,setToggle]=useState(false)

function clickBtn(){
    if(toggle===false){
        setToggle(true)
    }else{
        setToggle(false)
    }
}
return [toggle,clickBtn]
}
function Togglebtn() {
    const[isToggle,clickBtn]=useToggle()
  return (
    <div>
        
        <h1>{isToggle? "ON":"OFF"}</h1>
      <button onClick={clickBtn}>Toggle</button>
    </div>
  )
}

export default Togglebtn
