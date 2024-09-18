import React, { useContext } from 'react'
import Component3 from './Component3'
import { UserContext } from '../../App'

function Component2() {
    const {arr}=useContext(UserContext)
  return (
    <div>
      <h1>{arr}</h1>
    </div>
  )
}

export default Component2
