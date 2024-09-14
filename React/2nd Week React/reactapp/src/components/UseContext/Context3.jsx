import React, { useContext } from 'react'
import { Usecontext } from '../../App'

function Context3() {
    const {arr}=useContext(Usecontext)
  return (
    <div>
      <h1>{arr}</h1>
    </div>
  )
}

export default Context3

