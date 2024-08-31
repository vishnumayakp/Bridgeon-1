import React from 'react'
import Logged from './Logged'
import Notlogged from './Notlogged'

const main = () => {
    let isLogged=false
  return (
    <div>
      {isLogged? <Logged/>:<Notlogged/>}
    </div>
  )
}

export default main
