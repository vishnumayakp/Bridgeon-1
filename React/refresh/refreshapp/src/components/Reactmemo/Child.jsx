import React, { useState } from 'react'

function Child(props) {
    console.log('child');
   

  return (
    <div>
   <h1>{props.data}</h1>
    </div>
  )
}

export default React.memo(Child)
