import React, { useState } from 'react'
import './Events.css'

function Events() {
  const [text,setText]=useState("")
  const display=(e)=>{
    setText(e.target.value)
    console.log()
  }
  return (
    <div className='main'>
      <div className='container'>
      <h4 className='txt'>Enter Name</h4>
      <input onChange={display} type="text" className='field' />
      <button  className='btn'>Submit</button>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Events
