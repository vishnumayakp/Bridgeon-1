import React from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const nav=useNavigate()
  return (
    <div>
      <input type="text" placeholder='Enter Title' />
      <input type="text" placeholder='Enter Note' />
      <button onClick={()=>nav('/')}>Save Note</button>
    </div>
  )
}

export default Create
