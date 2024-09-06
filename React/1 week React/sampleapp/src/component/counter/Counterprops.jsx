import React from 'react'

function Counterprops({count,addNum}) {
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={addNum}>Increment</button>
    </div>
  )
}

export default Counterprops
