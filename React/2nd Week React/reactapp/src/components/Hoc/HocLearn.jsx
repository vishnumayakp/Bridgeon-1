import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'

function HocLearn({count,incrementCount}) {
  return (
    <div>
      <h1>Higher Order Component (HOC)</h1>

      <button onClick={incrementCount}>+{count}</button>
    </div>
  )
}

export default UpdatedComponent(HocLearn)
