import React from 'react'
import { useRef } from 'react'

function Bgref() {
    const changecolor=useRef(null)
    const color=()=>{
        if(changecolor.current.style.backgroundColor=='red'){
            changecolor.current.style.backgroundColor='blue'
        }else{
            changecolor.current.style.backgroundColor='red'
        }
    }
  return (
    <div>
      <div ref={changecolor} style={{width:'500px',height:'500px', backgroundColor:'red'}}>
        <button onClick={color}>Change Bg</button>
      </div>
    </div>
  )
}

export default Bgref
