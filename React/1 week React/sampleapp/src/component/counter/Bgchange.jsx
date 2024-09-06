import React, { useState } from 'react'
import './Counter.css'

function Bgchange() {
    const [color,setColor]=useState('yellow')
    const changeBg=()=>{
        setColor(prevColor=> (prevColor==='yellow'? 'lightblue':'yellow'));
    }
  return (
    <div className='main-Cont'>
      <div className='even' style={{background:color}}>
        <button onClick={changeBg}>Change Color</button>
      </div>
    </div>
  )
}

export default Bgchange
