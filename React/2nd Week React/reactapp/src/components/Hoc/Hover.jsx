import React, { useState } from 'react'
import UpdatedComponent from './WithCounter'
function Hover({count,incrementCount}) {
  return (
    <div>
      <h2 onMouseEnter={incrementCount}>Mouse Eneterd {count} times</h2>
    </div>
  )
}

export default UpdatedComponent(Hover)
