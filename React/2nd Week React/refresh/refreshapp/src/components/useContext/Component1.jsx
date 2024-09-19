import React, { useContext } from 'react'
import Component2 from './Component2'
import { UserContext } from '../../App'

function Component1() {
    const {arr}=useContext(UserContext)
  return (
    <div>
      {/* <h1>{arr}</h1> */}
    </div>
  )
}

export default Component1
