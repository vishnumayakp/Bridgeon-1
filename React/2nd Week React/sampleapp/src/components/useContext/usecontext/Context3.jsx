import React, { useContext } from 'react'
import { userContext } from './Context1'

function Context3() {
   const {car,fruit}=useContext(userContext)
  return (
    <div>
      <h1>Object values : {car.name} <br />{car.age} <br />{car.college}</h1>
      <h4>My fav fruit is {fruit}</h4>
    </div>
  )
}

export default Context3
