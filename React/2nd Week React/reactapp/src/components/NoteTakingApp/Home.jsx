import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav=useNavigate()
  return (
    <div>
      <button onClick={()=>nav('/createnote')}>Create Note</button>
    </div>
  )
}

export default Home
