import React from 'react'
import { useState } from 'react'
import './switch.css'

const Switchtheme = () => {
    const [color,setColor]=useState('white')
    const changeColor=()=>{
        color==='white'? setColor('black'):setColor('white')
    }
  return (
    <div className='bg' style={{background:color}}>
      <button onClick={changeColor}>Switch Theme</button>
    </div>
  )
}

export default Switchtheme
