import React from 'react'
import { useParams } from 'react-router-dom'

function Homedetails() {
    const {count} = useParams();

  return (
    <div>
      <h1>Home details</h1>
      <p>details Home : {count}</p>
    </div>
  )
}

export default Homedetails
